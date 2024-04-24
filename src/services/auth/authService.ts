import http from "../../http";
import { LoginResponseModel } from "../../models/loginResponseModel/login-response-model";
import { LoginCredentials } from "../../models/loginModel/loginModel";

export const getToken = (credential: LoginCredentials) => {
  return http.post<LoginResponseModel>(
    `auth/login`,
    JSON.stringify(credential)
  );
};

export const refreshToken = () => {
  return http.post<LoginResponseModel>(`auth/refresh`);
};
