import { UserInterface } from "./user";

export interface IAppointament {
  id: string;
  data: string;
  specialist: UserInterface;
  status: string;
  observacoes?: string;
}

export interface IAtletaProfile {
  consultas: any[];
}