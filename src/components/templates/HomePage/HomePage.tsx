import styles from "./HomePage.module.scss";
import { getAccessTokenCookie } from "@/utils/cookie";
import { LoginPage } from "@/components/templates/LoginPage/LoginPage";

export const HomePage = () => {
  const isLogin = getAccessTokenCookie();
  return <>{isLogin ? <HomePage /> : <LoginPage />}</>;
};
