import { privateApi } from "./api";

export const isUserAutheticated = (): boolean => {
  const token = localStorage.getItem("@token");

  if (token) return true;

  return token ? true : false;
};

export const clearSession = () => {
  privateApi.defaults.headers.authorization = "invalid";

  localStorage.clear();
};
