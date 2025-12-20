export type Response<T = undefined> = {
  status: number;
  message: string;
  data?: T;
};
