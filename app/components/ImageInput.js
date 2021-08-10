import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (!granted)
            alert("You need to enable permission to access the library.");
    };

    // when user wants to delete image
    const handlePress = () => {
        if (!imageUri) selectImage();
        else
            Alert.alert(
                "Delete",
                "Are you sure you want to delete this image?",
                [
                    // remove from the container not the photo library
                    { text: "Yes", onPress: () => onChangeImage(null) },
                    { text: "No" }
                ]
            );
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            // notify the consumer that image has been changed
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log("Error reading an image", error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
                {!imageUri && (
                    <MaterialCommunityIcons
                        color={colors.medium}
                        name="camera"
                        size={40}
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default ImageInput;
