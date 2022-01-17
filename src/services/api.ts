import axios from "axios";
import { IAppointament } from "../interfaces/appointaments";
import { INutricionista } from "../interfaces/nutricionista";
import { IPersonal } from "../interfaces/personal";

import { AuthResponse, UserInterface } from "../interfaces/user";

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

export const createAthlete = async (
  user: UserInterface
): Promise<UserInterface> => {
  return {
    email: "neivacristiano@yahoo.com.br",
    id: "id",
    name: "Cristiano",
    password: "pass",
  };
};

export const createPersonal = async (
  personal: IPersonal
): Promise<IPersonal> => {
  return {
    email: "neivacristiano@yahoo.com.br",
    id: "id",
    name: "Cristiano",
    password: "pass",
    credential: "cref",
  };
};

export const createNutricionista = async (
  nutricionista: INutricionista
): Promise<INutricionista> => {
  return {
    email: "neivacristiano@yahoo.com.br",
    id: "id",
    name: "Cristiano",
    password: "pass",
    credential: "crn",
  };
};

export const getNutricionistas = async (): Promise<INutricionista[]> => {
  return [
    {
      email: "neivacristiano@yahoo.com.br",
      id: "id1",
      name: "Cristiano",
      password: "pass",
      credentialType: "CRN",
      credential: "crn1",
    },
    {
      email: "neivacristiano@yahoo.com.br",
      id: "id2",
      name: "Felipe",
      password: "pass",
      credentialType: "CRN",
      credential: "crn2",
    },
  ];
};

export const getPersonais = async (): Promise<IPersonal[]> => {
  return [
    {
      email: "neivacristiano@yahoo.com.br",
      id: "id1",
      name: "Cristiano",
      password: "pass",
      credentialType: "CREF",
      credential: "cref1",
    },
    {
      email: "neivacristiano@yahoo.com.br",
      id: "id2",
      name: "Felipe",
      password: "pass",
      credentialType: "CREF",
      credential: "cref2",
    },
  ];
};

export const getUserAppointaments = async (
  userId: string
): Promise<IAppointament[]> => {
  return [
    {
      id: "1",
      data: new Date().toISOString(),
      specialist: {
        name: "Joao",
        email: "email@mail.com",
        type: "nutricionista",
      },
      status: "Marcada",
    },
    {
      id: "2",
      data: new Date().toISOString(),
      specialist: {
        name: "Felipe",
        email: "email@mail.com",
        type: "personal",
      },
      status: "Cancelada",
    },
    {
      id: "3",
      data: new Date().toISOString(),
      specialist: {
        name: "Felipe",
        email: "email@mail.com",
        type: "personal",
      },
      status: "Concluida",
    },
  ];
};

export const getAvaliableAppointaments = async (
  userId: string
): Promise<{ data: string; horarios: string[] }[]> => {
  return [
    {
      data: "2022-01-01",
      horarios: ["08:00", "09:00"],
    },
    {
      data: "2022-01-04",
      horarios: ["12:00", "09:00"],
    },
  ];
};
