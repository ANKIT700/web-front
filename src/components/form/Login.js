import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// const SignUpSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Firstname is required"),

//   lastName: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Lastname is required"),

//   phoneNumber: Yup.string()
//     .required("Phone number is required")
//     .matches(
//       /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
//       "Invalid phone number"
//     ),

//   email: Yup.string().email().required("Email is required"),

//   password: Yup.string()
//     .required("Password is required")
//     .min(6, "Password is too short - should be 6 chars minimum"),
// });
const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
});
const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
//   const submitForm = (values) => {
//     console.log(values);
//   };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="container">
              <h1>Sign in to continue</h1>
              <Form>
                <div className="form-row">
                  <label htmlFor="email">Email</label><br/>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="password">Password</label><br/>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="error"
                  />
                </div>

                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign In
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
