"use client";
import * as Yup from "yup";
import styles from "./LoginTemplate.module.scss";
import { FormikValues, useFormik } from "formik";
export const LoginTemplate = () => {
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

  const handleLogin = (values: FormikValues) => {
    console.log(values);
  };
  return <h1>Login</h1>;
};
