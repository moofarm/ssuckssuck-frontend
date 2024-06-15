import axios from "axios";

export const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
      "Content-Type": `application/json;charset=UTF-8`,
      "Accept": "application/json;charset=UTF-8",
      //   "Authorization": "Bearer " + token,
      "Access-Control-Allow-Origin": `http://localhost:3000`,
      "Access-Control-Allow-Credentials": "true",
    },
  });
  return instance;
};
