"use client";

import styles from "./RegisterTemplate.module.scss";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
import { Button } from "@/components/base/button/Button";
import { projectURL } from "@/const/projectURL";
import { Form, FormikProvider, useFormik } from "formik";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import * as Yup from "yup";
import { FormikCheckbox } from "@/components/form/formikCheckbox/FormikCheckbox";
import { Spinner } from "@/components/base/spinner/Spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/hooks/mutations/useRegisterMutation";
import { ComponentPropsWithoutRef, FC } from "react";

interface RegisterTemplateProps extends ComponentPropsWithoutRef<"div"> {
  locale: string;
}

export const RegisterTemplate: FC<RegisterTemplateProps> = ({ locale }) => {
  const { mutate: register, isLoading } = useRegisterMutation();
  const router = useRouter();

  const t = useTranslations("RegisterPage");

  const registerFormik = useFormik({
    initialValues: {
      nick: "",
      email: "",
      password: "",
      passwordConfirm: "",
      agree: false,
      locale,
    },
    onSubmit: async (values) => {
      register(values, {
        onSuccess: (res) => {
          if (res.data.code === 502) {
            toast.error(t("email-exists-in-the-database"), { autoClose: 1200 });
            return;
          }
          router.push(`thanks-for-register`);
        },
        onError: () => {
          toast.error(t("connection-error"), { autoClose: 1200 });
        },
      });
    },
    validationSchema: Yup.object().shape({
      nick: Yup.string()
        .min(3, t("validate.min.min-name"))
        .max(50, t("validate.max.max-name"))
        .required(t("validate.required.required-name")),
      email: Yup.string()
        .email(t("validate.matches.matches-email"))
        .min(11, t("validate.min.min-email"))
        .max(150, t("validate.max.max-email"))
        .required(t("validate.required.required-email")),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_`+{}\[\]:;<>,.?~\-=/\\]{8,}$/,
          t("validate.matches.matches-password"),
        )
        .required(t("validate.required.required-password")),
      passwordConfirm: Yup.string()
        .oneOf(
          [Yup.ref("password")],
          t("validate.matches.matches-confirm-password"),
        )
        .required(t("validate.required.required-confirm-password")),
      agree: Yup.bool().oneOf([true], t("validate.required.required-agree")),
    }),
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <Text
          tag="h1"
          text={t("create-account")}
          fontSize="xl"
          isUppercase
          weight="700"
          fontFamily="inter"
          color="white"
          className={styles.header}
        />
        <FormikProvider value={registerFormik}>
          <Form className={styles["form-inner"]}>
            <div>
              <FormikInput
                type="text"
                name="nick"
                label={t("your-name")}
                id="nick"
                required
              />
              <FormikInput
                type="text"
                name="email"
                label={t("your-email")}
                id="email"
                required
              />
              <FormikInput
                type="password"
                name="password"
                label={t("password")}
                id="password"
                required
              />
              <FormikInput
                name="passwordConfirm"
                type="password"
                label={t("repeat-your-password")}
                id="passwordConfirm"
                required
              />
            </div>
            <div className={styles.checkboxWrapper}>
              <FormikCheckbox
                name="agree"
                label={t("i-agree-all-statements-in")}
                color="blue"
                checked={registerFormik.values.agree}
              />
              <Button
                href="#"
                text={t("regulations")}
                fontColor="blue"
                weight="600"
                fontSize="xs"
                fontFamily="inter"
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
                  text={t("sign-up")}
                  className={styles.button}
                  variant="base"
                  size="lg"
                />
              </div>
            )}
          </Form>
        </FormikProvider>

        <div className={styles["form-goToLogin"]}>
          <Text
            tag="span"
            text={t("have-already-an-account")}
            fontSize="md"
            fontFamily="inter"
            color="white"
          />
          <Button
            href={projectURL(locale).LOGIN}
            type="button"
            text={t("login-here")}
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
