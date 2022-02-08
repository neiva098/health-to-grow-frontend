import { IProfissional, IRelationedProfissional } from './../interfaces/profissional';
import { ICreateUser, IUser } from './../interfaces/user';
import axios from "axios";
import { IAppointament } from "../interfaces/appointaments";
import { INutricionista } from "../interfaces/nutricionista";
import { IPersonal } from "../interfaces/personal";

import { AuthResponse, IExercice, UserInterface } from "../interfaces/user";

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

  const apiResponse = await publicApi.post("/api/users/auth", {
    email,
    password,
  });

  setUserDataOnLocalStorage(apiResponse.data);
  privateApi.defaults.headers.authorization = apiResponse.data.token;

  return apiResponse.data;
};

export const createUser = async (
  user: ICreateUser
): Promise<IUser> => {
  const res = await publicApi.post('/api/users', user)

  return res.data
};

export const createPersonal = async (
  personal: ICreateUser
): Promise<ICreateUser> => {
  personal.profissioanlProfile = {
    ...personal.profissioanlProfile!,
    credentialType: 'CREF',
    type: 'personal'
  }

  return await createUser(personal)
};

export const createNutricionista = async (
  nutricionista: ICreateUser
): Promise<ICreateUser> => {
  nutricionista.profissioanlProfile = {
    ...nutricionista.profissioanlProfile!,
    credentialType: 'CRN',
    type: 'nutricionista'
  }

  return await createUser(nutricionista)
};

export const getNutricionistas = async (): Promise<IRelationedProfissional[]> => {
  const response = await publicApi.get('/api/profissionais?type=nutricionista');

  return response.data
};

export const getPersonais = async (): Promise<IRelationedProfissional[]> => {
  const response = await publicApi.get('/api/profissionais?type=personal');

  return response.data
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
  const response = await publicApi.get(`/api/consultas/avaliable/${userId}`);

  return response.data
};

export const getExercises = async (): Promise<IExercice[]> => {
  return [
    {
      id: "1",
      carga: "34 Kg",
      nome: "Agachamento",
      repeticoes: "15",
      serie: "3",
    },
    {
      id: "2",
      carga: "20 Kg",
      nome: "Supino Vertical",
      repeticoes: "12",
      serie: "3",
    },
  ];
};
