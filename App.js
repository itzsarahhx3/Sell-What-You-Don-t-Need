import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
    return <ListingEditScreen />;
}

/**
 * Testing codes for AppPicker
 */

// const categories = [
//     {
//         label: "Furniture",
//         value: 1
//     },
//     {
//         label: "Clothing",
//         value: 2
//     },
//     {
//         label: "Cameras",
//         value: 3
//     }
// ];

// const [category, setCategory] = useState(categories[0]);

// <Screen>
//     <AppPicker
//         icon="apps"
//         items={categories}
//         placeholder="Category"
//         selectedItem={category}
//         onSelectItem={(item) => setCategory(item)}
//         />
//     <AppTextInput icon="email" placeholder="Email" />
// </Screen>
