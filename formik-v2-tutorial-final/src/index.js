import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
//import { transformAll, transformObject, setDebug } from "yup-ast";
import { transformAll } from "@demvsystems/yup-ast";
import "./styles.css";
import "./styles-custom.css";

import MyCheckbox from "./components/MyCheckbox";
import MySelect from "./components/MySelect";
import MyTextInput from "./components/MyTextInput";
import formValidationSchema from "./schemas/formValidationSchema.json";
import secondSchema from "./schemas/secondSchema.json";
// And now we can use these
const SignupForm = () => {
  const declare_schema_in_code = () => {
    const schemaObj = {
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email addresss`").required("Required"),
      acceptedTerms: Yup.boolean()
        .required("Required")
        .oneOf([true], "You must accept the terms and conditions."),
      jobType: Yup.string()
        // specify the set of valid values for job type
        // @see http://bit.ly/yup-mixed-oneOf
        .oneOf(
          ["designer", "development", "product", "other"],
          "Invalid Job Type"
        )
        .required("Required"),
    };
    return Yup.object(schemaObj);
  };

  const convert_schema_to_json = () => {
    const schema_to_serialize = declare_schema_in_code();
    const schemaDesc = validationSchema.describe();
    console.log(schemaDesc);
    console.log(JSON.stringify(schemaDesc));
  };

  const load_schema_from_ast_json_file = () => {
    const json_object = secondSchema; // see import statement at top
    const mySecondSchema = transformAll(json_object);
    return mySecondSchema;
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email addresss`").required("Required"),
    acceptedTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
    jobType: Yup.string()
      // specify the set of valid values for job type
      // @see http://bit.ly/yup-mixed-oneOf
      .oneOf(
        ["designer", "development", "product", "other"],
        "Invalid Job Type"
      )
      .required("Required"),
  });

  const load_schema_from_json_object_definition = () => {};

  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
