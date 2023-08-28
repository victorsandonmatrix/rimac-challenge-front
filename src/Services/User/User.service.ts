import { AxiosResponse } from "axios";

import { api } from "../api";

import { User } from "../../Interfaces/User";

type ResponseUser = AxiosResponse<User>;

export const getUser = async (id: number): Promise<ResponseUser> => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};
