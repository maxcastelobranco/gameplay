import useSWR from "swr";

import { fetcher } from "../services/api";
import { GuildData } from "../screens/Home";

export const useGuilds = () => {
  const { data: guilds, error } = useSWR<GuildData[]>(
    "users/@me/guilds",
    fetcher
  );

  return {
    guilds,
    error,
  };
};
