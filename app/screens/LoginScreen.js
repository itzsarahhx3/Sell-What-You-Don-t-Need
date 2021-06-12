import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

// outside of rsf b/c don't want to redefine every time the function re-render
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    // minimum 4 characters
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <AppForm
                initialValues={{ email: "", password: "" }}
                // handleSubmit happens here
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {/* this returns JSX */}
                {
                    <>
                        <AppFormField
                            name="email"
                            placeholder="Email"
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />
                        <AppFormField
                            name="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            textContentType="password"
                            secureTextEntry
                        />

                        <SubmitButton title="Login" />
                    </>
                }
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    },
    container: {
        padding: 10
    }
});

export default LoginScreen;

{
    /* <ErrorMessage
error={errors.email}
visible={touched.email}
/> */
}
