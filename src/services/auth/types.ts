export type RegisterDTO = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type LoginDTO = {
  email: string;
  password: string;
};

export type Response<T = undefined> = {
  status: number;
  message: string;
  data?: T;
};
