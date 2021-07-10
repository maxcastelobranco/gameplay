import useSWR from "swr";

import { fetcher } from "../services/api";
import { GuildData } from "../screens/Home";

export const useGuild = (id: string) => {
  const { data: guild, error } = useSWR<GuildData>(
    `/guilds/${id}/preview`,
    fetcher
  );

  return {
    guild,
    error,
  };
};
