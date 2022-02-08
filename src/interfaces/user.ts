import { IProfissional } from './profissional';
import { IAtletaProfile } from "./appointaments";

export interface UserInterface {
  id?: string;
  name: string;
  email: string;
  password?: string;
  appointaments?: Appointament[];
  credentialType?: string;
  credential?: string;
  avaliableAppointaments?: { data: string; horarios: string[] }[];
  type?: string;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;

  atletaProfile?: IAtletaProfile;
  profissioanlProfile?: Omit<IProfissional, 'codigoPessoa'>
}

export interface ICreateUser extends Omit<IUser, 'id'> {}



export interface Appointament {
  client: UserInterface;
  target: UserInterface;

  dh: string;
}

export interface AuthResponse {
  name: string;
  email: string;
  token: string;
  id: string;
}

export interface IExercice {
  id: string;
  nome: string;
  serie: string;
  repeticoes: string;
  carga: string;
}
