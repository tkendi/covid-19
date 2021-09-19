import { API } from "api/API";

export const getKorea = async () => {
  return await API.get("/api/korea");
};

export const getKoreaMonth = async () => {
  return await API.get("/api/korea/month");
};
