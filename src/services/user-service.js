import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios
    .post("/auth/v1/register", user)
    .then((response) => response.data);
};

export const login = (credentials) => {
  return myAxios
    .post("/auth/v1/login", credentials)
    .then((response) => response.data);
}
