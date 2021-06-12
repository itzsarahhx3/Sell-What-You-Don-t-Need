import React from "react";
import { useFormikContext } from "formik"; // react-context

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

/**
 * useFormikContext:
 * retrieve props from parent and pass here as state props
 * act like React Hook
 */
function AppFormField({ name, width, ...otherProps }) {
    const { handleChange, errors, setFieldTouched, touched } =
        useFormikContext();

    return (
        <>
            <AppTextInput
                // props below passed to AppTextInput
                // name="email"
                // placeholder="Email"
                // icon="email"
                // autoCapitalize="none"
                // autoCorrect={false}
                // keyboardType="email-address"
                // textContentType="emailAddress"
                // takes the initial values
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;
