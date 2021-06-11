import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Platform,
    Modal,
    Button
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Screen from "./Screen";

/**
 * React, can only return single componenet, not multiple
 * so need react.Fragment -> same as <>
 */
function AppPicker({ icon, placeholder, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>{placeholder}</AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button
                        title="Close"
                        onPress={() => setModalVisible(false)}
                    />
                </Screen>
            </Modal>
        </React.Fragment>
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
    },
    text: {
        flex: 1
    }
});

export default AppPicker;
