"use client";
import * as Yup from "yup";
import styles from "./LoginTemplate.module.scss";
import { Form, FormikProvider, useFormik } from "formik";
import { Text } from "@/components/base/text/Text";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import { Spinner } from "@/components/base/spinner/Spinner";
import { Button } from "@/components/base/button/Button";
import { projectURL } from "@/const/projectURL";
import { useTranslations } from "next-intl";
import { useLoginMutation } from "@/hooks/mutations/useLoginMutation";
import { toast } from "react-toastify";
import { LoginValues } from "@/types/loginValues";
import { useRouter } from "next/navigation";

export const LoginTemplate = () => {
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const { mutate: login, isLoading, isError } = useLoginMutation();

  const loginFormik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: (values) => handleLogin(values),
    validationSchema: Yup.object().shape({
      login: Yup.string().required(),
      password: Yup.string().required(),
    }),
  });

  const handleLogin = async (values: LoginValues) => {
    login(values, {
      onError: (res) => {
        // @ts-ignore
        if (res.response.status === 401) {
          toast.error(t("incorrect-login-or-password"));
          return;
        } else {
          toast.error(t("error-connection"));
        }
      },

      onSuccess: (res) => {
        console.log(res);
        router.push("/");
      },
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <Text
          tag="h1"
          text={t("sign-in")}
          fontSize="xl"
          isUppercase
          weight="700"
          fontFamily="inter"
          className={styles.header}
        />
        <FormikProvider value={loginFormik}>
          <Form className={styles["form-inner"]}>
            <div>
              <FormikInput
                type="text"
                name="login"
                placeholder={t("your-name")}
              />
              <FormikInput
                type="password"
                name="password"
                placeholder={t("password")}
              />
            </div>
            {isLoading ? (
              <Spinner className={styles.spinner} />
            ) : (
              <Button
                type="submit"
                text={t("sign-in")}
                className={styles.button}
                variant="success"
                size="lg"
              />
            )}
          </Form>
        </FormikProvider>

        <div className={styles["form-isAccount"]}>
          <Text
            tag="span"
            text={t("dont-have-already-an-account")}
            fontSize="md"
            fontFamily="inter"
          />
          <Button
            href={projectURL.REGISTER}
            type="button"
            text={t("register-here")}
            size="sm"
            fontSize="md"
            fontFamily="inter"
            fontColor="black"
            weight="700"
          />
        </div>
      </div>
    </div>
  );
};
