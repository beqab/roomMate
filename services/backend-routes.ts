import { BASE_URL } from "./api";

export const backEndRoutes = {
  auth: {
    login: () => `${BASE_URL}​/auth/login`,
    register: () => `${BASE_URL}/api/register`,
    password: {
      reset: () => `${BASE_URL}/api/reset/password`,
      recover: () => `${BASE_URL}/api/recover/password`,
    },
    resendVerification: (email) =>
      `${BASE_URL}/api/resend/verification/${email}`,
  },
  profile: {
    getUser: (token: string) => `${BASE_URL}​/auth/profile`,
  },
  questions: {
    getQuestions: () => `${BASE_URL}​/questions`,
    saveAnswers: () => `${BASE_URL}​/users/save-answers`,
  },
};
