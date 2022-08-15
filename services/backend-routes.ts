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
    search: () => `${BASE_URL}​/users/search`,
    getUserById: (id: string) => `${BASE_URL}​/users/profile/${id}`,
    getFavorites: () => `${BASE_URL}/users/favourites`,
    getSentNotifications: () => `${BASE_URL}/users/sent-requests`,
    getReceivedNotifications: () => `${BASE_URL}/users/received-requests`,
    addRemoveFavorites: () => `${BASE_URL}/users/add-or-remove-favourites`,
    addContactRequest: (id: number) => `${BASE_URL}​/users/send-request/${id}`,
    removeContactRequest: (id: number) =>
      `${BASE_URL}​/users/sent-request/${id}`,
  },
  questions: {
    getQuestions: () => `${BASE_URL}​/questions`,
    saveAnswers: () => `${BASE_URL}​/users/save-answers`,
    updateAnswers: () => `${BASE_URL}​/users/update-user-answers`,
    checkPhone: () => `${BASE_URL}​/users/check-phone`,
  },
};
