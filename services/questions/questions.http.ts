import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";

import axios, { AxiosPromise } from "axios";
import { backEndRoutes } from "../backend-routes";

export type IQuestions = {
  id: number;
  type: "choice" | "free-text" | "password" | "text";
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
};

class _Questions {
  getQuestions = (): AxiosPromise<IQuestions[]> => {
    return axios.get(backEndRoutes.questions.getQuestions());
  };

  saveAnswers = (answers: any): AxiosPromise => {
    return axios.post(backEndRoutes.questions.saveAnswers(), answers);
  };
}

export const Questions = new _Questions();
