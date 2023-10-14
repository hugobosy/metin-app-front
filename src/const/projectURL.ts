export const projectURL = (locale: string) => ({
  LOGIN: `/${locale}/login`,
  REGISTER: `/${locale}/register`,
  PROFILE: `/${locale}/profile`,
  HOME: `/${locale}/`,
});

export const END_POINT = {
  register: "/users/add",
  login: "/auth/login",
  checkAuth: "/auth/profile",
  activate: "/users/activate",
};
