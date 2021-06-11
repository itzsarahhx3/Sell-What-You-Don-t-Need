import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")}
                />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            {/* <View style={styles.loginBtn}></View> */}
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="login"
                    onPress={() => console.log("tapped")}
                />
                {/* <View style={styles.registerBtn}></View> */}
                <AppButton title="Register" color="secondary" />
            </View>
        </ImageBackground>
    );
}

// rnss
const styles = StyleSheet.create({
    background: {
        // takes the entire screen
        flex: 1,
        // btn go to bottom
        justifyContent: "flex-end",
        // make logo center of the screen
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: "100%"
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        // to its 1st positioned parent
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
});

export default WelcomeScreen;
