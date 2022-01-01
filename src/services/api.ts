import axios from "axios";

import { AuthResponse } from "../interfaces/user";

import { setUserDataOnLocalStorage } from "../utils/user";
import { clearSession } from "./auth";

const baseUrl = "http://localhost:3333";

export const publicApi = axios.create({
  baseURL: baseUrl,
});

export const privateApi = axios.create({
  baseURL: baseUrl,
  headers: {
    authorization: localStorage.getItem("@token") || "invalid",
  },
  validateStatus: (status) => (status >= 200 && status < 300) || status === 400,
});

export const logIn = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  clearSession();

  const apiResponse = {
    data: {
      email: "neivacristiano@yahoo.com.br",
      id: "id",
      name: "Cristiano",
      token: "token",
    } as AuthResponse,
  };

  // const apiResponse = await publicApi.post("/api/users/authenticate", {
  //   email,
  //   password,
  // });

  setUserDataOnLocalStorage(apiResponse.data);
  privateApi.defaults.headers.authorization = apiResponse.data.token;

  return apiResponse.data;
};
