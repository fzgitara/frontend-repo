export const URL = {
  CREATE: '/create-user-data',
  FETCH_ALL: '/fetch-all-user-data',
  FETCH_BY_ID: (id: string) => `/fetch-user-data/${id}`,
  UPDATE_BY_ID: (id: string) => `/update-user-data/${id}`,
  REGISTER: '/register',
  LOGIN: '/login',
  LOGOUT: '/logout'
};