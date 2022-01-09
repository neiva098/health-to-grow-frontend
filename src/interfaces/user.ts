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
