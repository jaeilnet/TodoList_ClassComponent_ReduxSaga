import axios, { AxiosResponse } from "axios";

const baseUrl = "http://0.0.0.0:9002/api/v2";

const instance = axios.create({
  baseURL: baseUrl,
});

const getApi = async (): Promise<AxiosResponse> => {
  return await instance.get(`${baseUrl}/todo`);
};

const postApi = async (): Promise<AxiosResponse> => {
  return await instance.post(`${baseUrl}/todo`);
};

const deleteApi = async (id: number): Promise<AxiosResponse> => {
  return await instance.delete(`${baseUrl}/todo`, {
    data: {
      id: id,
    },
  });
};

const patchStatusApi = async (id: number): Promise<AxiosResponse> => {
  return await instance.patch(`${baseUrl}/todo`, {
    id: id,
  });
};

const patchTextAPI = async (
  id: number,
  contents: string
): Promise<AxiosResponse> => {
  return await instance.patch(`${baseUrl}/todo/editTodo`, {
    id: id,
    contents,
  });
};

const postLoginAPI = async (
  id: string,
  password: string
): Promise<AxiosResponse> => {
  return await instance.post(`${baseUrl}/todo/auth/auth0`, {
    userId: id,
    password,
  });
};

const loginCheckAPI = async (token: string): Promise<AxiosResponse> => {
  return await instance.post(`${baseUrl}/todo/auth/auth0`, {
    token: token,
  });
};

export const api = {
  getApi,
  postApi,
  deleteApi,
  patchStatusApi,
  patchTextAPI,
  postLoginAPI,
  loginCheckAPI,
};
