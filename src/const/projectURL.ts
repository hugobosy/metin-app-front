export const projectURL = (locale: string) => ({
  LOGIN: `/${locale}/login`,
  REGISTER: `/${locale}/register`,
  PROFILE: `/${locale}/profile`,
  HOME: `/${locale}/`,
  BOOKKEEPING: `/${locale}/bookkeeping`,
  MAGAZINE: `/${locale}/magazine`,
  ANIMALS: `/${locale}/my-animals`,
  COSTUMES: `/${locale}/my-costumes`,
  NOTEPAD: `/${locale}/notepad`,
});

export const END_POINT = {
  register: "/users/add",
  login: "/auth/login",
  checkAuth: "/auth/profile",
  activate: "/users/activate",
  getExpenses: "/expenses",
  getRevenues: "/revenues",
  getObjective: "/objective",
};
