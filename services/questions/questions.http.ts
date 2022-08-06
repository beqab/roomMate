import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import axios from "axios";
import { backEndRoutes } from "../backend-routes";

export type IQuestions = {
  id: number;
  title: string;
  description: string;
  user_property: boolean;
  position: number;
  is_multiple?: boolean;
  answers: {
    id: number;
    title: string;
    question_id: number;
    active: boolean;
  }[];
}[];

class _Questions {
  getQuestions = (): Promise<IQuestions> => {
    return axios.get(backEndRoutes.questions.getQuestions());
  };
}

export const AuthService = new _Questions();
