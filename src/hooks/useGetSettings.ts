import { createClient } from "@/prismicio";

export const useGetSettings = async () => {
  const client = createClient();
  return await client.getSingle("settings");
};

export const useGetNavigation = async () => {
  const client = createClient();
  return await client.getSingle("navigation");
};
