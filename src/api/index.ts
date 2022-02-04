import axios from "axios";

export interface ApitTest {
  // metho
}

const baseUrl = "http://0.0.0.0:9002/api/v2";

// export const axiosAPi = (method: any, url: string) => {
//   switch (method) {
//     case method.get:
//       axios.get(`${baseUrl}/url`);
//       break;
//     case method.post:
//       axios.post(baseUrl, url);
//       break;
//     default:
//       break;
//   }
// };

// ????

const instance = axios.create({
  baseURL: baseUrl,
});

const getApis = () => {
  return instance.get(`${baseUrl}/todo`);
};

const postApi = () => {
  return instance.post(`${baseUrl}/todo`);
};

const deleteApi = (id: number) => {
  return instance.delete(`${baseUrl}/todo`, {
    data: {
      data: 1,
    },
  });
};

export const api = {
  getApis,
  postApi,
  deleteApi,
};
