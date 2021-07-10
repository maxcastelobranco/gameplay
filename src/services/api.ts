import axios from "axios";

export const api = axios.create({
  baseURL: "https://discord.com/api",
});

export const fetcher = async (url: string) => {
  const { data } = await api.get(url);
  return data;
};
