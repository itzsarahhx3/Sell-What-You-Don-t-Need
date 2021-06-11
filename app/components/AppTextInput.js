import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={colors.medium}
                    style={styles.icon}
                />
            )}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        // material Icon & text lays out horizontally
        flexDirection: "row",
        width: "100%",
        padding: 15,
        // separate multiple input in same screen
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    }
});

export default AppTextInput;
