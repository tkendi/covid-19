import { API } from "api/API";

export const getWorld = async () => {
  return await API.get("/api/world");
};
