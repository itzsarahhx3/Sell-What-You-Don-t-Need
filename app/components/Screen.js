import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {/* use the style from Card */}
            {/* 2nd style is the style passed from outside */}
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    view: {
        flex: 1
    }
});

export default Screen;
