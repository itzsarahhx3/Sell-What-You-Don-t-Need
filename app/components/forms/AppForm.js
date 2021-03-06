import React from "react";
import { Formik } from "formik";

// this handles email & password
function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik
            initialValues={initialValues}
            // handleSubmit happens here
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
}

export default AppForm;
