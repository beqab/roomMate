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
    getFavorites: () => `${BASE_URL}/favourites`,
    getSentNotifications: () => `${BASE_URL}/requests/sent`,
    getReceivedNotifications: () => `${BASE_URL}/requests/received`,
    addRemoveFavorites: () => `${BASE_URL}/favourites/add-or-remove`,
    addContactRequest: (id: number) => `${BASE_URL}​/requests/${id}`,
    removeContactRequest: (id: number) => `${BASE_URL}​/requests/${id}`,
    approveRejectContact: (id: number) => `${BASE_URL}/requests/answer/${id}`,
    updateLockCommunication: () =>
      `${BASE_URL}/users/update-lock-communication`,
  },
  questions: {
    getQuestions: () => `${BASE_URL}​/questions`,
    saveAnswers: () => `${BASE_URL}​/user-answers/save`,
    updateAnswers: () => `${BASE_URL}​/user-answers/update`,
    checkPhone: () => `${BASE_URL}​/users/check-phone`,
  },
};
