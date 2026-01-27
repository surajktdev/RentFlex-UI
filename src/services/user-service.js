import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios
    .post("/api/v1/users/register", user)
    .then((response) => response.data);
};
