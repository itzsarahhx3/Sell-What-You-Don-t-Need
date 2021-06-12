import React from "react";
import { useFormikContext } from "formik"; // react-context

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
    const { handleChange, handleSubmit, errors, setFieldTouched, touched } =
        useFormikContext();

    return (
        <>
            <AppTextInput
                // placeholder="Email"
                // icon="email"
                // autoCapitalize="none"
                // autoCorrect={false}
                // keyboardType="email-address"
                // textContentType="emailAddress"
                // takes the initial values
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;
