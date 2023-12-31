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
import { ComponentPropsWithoutRef, FC } from "react";

export interface LoginTemplateProps extends ComponentPropsWithoutRef<"div"> {
  locale: string;
}

export const LoginTemplate: FC<LoginTemplateProps> = ({ locale }) => {
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const { mutate: login, isLoading, isError } = useLoginMutation();

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => handleLogin(values),
    validationSchema: Yup.object().shape({
      email: Yup.string().required(t("required-email")),
      password: Yup.string().required(t("required-password")),
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
                name="email"
                label={t("your-name")}
                className={styles.input}
                id="email"
                required
              />
              <FormikInput
                type="password"
                name="password"
                label={t("password")}
                className={styles.input}
                id="password"
                required
              />
            </div>
            {isLoading ? (
              <div className={styles.buttonWrapper}>
                <Spinner className={styles.spinner} />
              </div>
            ) : (
              <div className={styles.buttonWrapper}>
                <Button
                  type="submit"
                  text={t("sign-in")}
                  variant="base"
                  size="lg"
                />
              </div>
            )}
          </Form>
        </FormikProvider>

        <div className={styles["form-goToRegister"]}>
          <Text
            tag="span"
            text={t("dont-have-already-an-account")}
            fontSize="md"
            fontFamily="inter"
            color="white"
          />
          <Button
            href={projectURL(locale ? locale : "pl").REGISTER}
            text={t("register-here")}
            size="sm"
            fontSize="md"
            fontFamily="inter"
            fontColor="blue"
            weight="700"
          />
        </div>
      </div>
    </div>
  );
};
