import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import axios from "axios";
import { backEndRoutes } from "../backend-routes";

class _AuthService {
  login = (data: any) => {
    return axios.post(backEndRoutes.auth.login(), data);
  };
  register = (data: any) => {
    return axios.post(backEndRoutes.auth.register(), data);
  };
}

export const AuthService = new _AuthService();
