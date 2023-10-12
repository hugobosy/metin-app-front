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
          className={styles.header}
        />
        <FormikProvider value={registerFormik}>
          <Form className={styles["form-inner"]}>
            <div>
              <FormikInput
                type="text"
                name="nick"
                placeholder={t("your-name")}
              />
              <FormikInput
                type="text"
                name="email"
                placeholder={t("your-email")}
              />
              <FormikInput
                type="password"
                name="password"
                placeholder={t("password")}
              />
              <FormikInput
                name="passwordConfirm"
                type="password"
                placeholder={t("repeat-your-password")}
              />
            </div>
            <FormikCheckbox
              name="agree"
              label={t("i-agree-all-statements-in")}
              color="green"
              checked={registerFormik.values.agree}
            />
            {isLoading ? (
              <Spinner className={styles.spinner} />
            ) : (
              <Button
                type="submit"
                text={t("sign-up")}
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
            text={t("have-already-an-account")}
            fontSize="md"
            fontFamily="inter"
          />
          <Button
            href={projectURL.LOGIN}
            type="button"
            text={t("login-here")}
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
