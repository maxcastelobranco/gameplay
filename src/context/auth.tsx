import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  DISCORD_CDN,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from "../config/discordAuth";
import { api } from "../services/api";

interface AuthContextData {
  user: User | null;
  signIn: () => Promise<void>;
  isLoading: boolean;
}

interface User {
  avatar: string;
  discriminator: string;
  email: string;
  flags: number;
  id: string;
  locale: string;
  mfa_enabled: boolean;
  public_flags: number;
  token: string;
  username: string;
  verified: boolean;
}

const AuthContext = createContext({} as AuthContextData);

type AuthResponse = AuthSession.AuthSessionResult & {
  params: { access_token?: string; error?: string };
};

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = useCallback(async () => {
    try {
      setIsLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const {
        type,
        params: { access_token, error },
      } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === "success" && access_token && !error) {
        api.defaults.headers.authorization = `Bearer ${access_token}`;

        const { data } = await api.get<Omit<User, "token">>("users/@me");
        const authenticatedUser = {
          ...data,
          avatar: `${DISCORD_CDN}/avatars/${data.id}/${data.avatar}`,
          token: access_token,
        };
        setUser(authenticatedUser);
        await AsyncStorage.setItem(
          "@gampelay:user",
          JSON.stringify(authenticatedUser)
        );
      }
    } catch (e) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("@gampelay:user").then((response) => {
      if (response) {
        const parsedUser = JSON.parse(response) as User;
        api.defaults.headers.authorization = `Bearer ${parsedUser.token}`;
        setUser(parsedUser);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
