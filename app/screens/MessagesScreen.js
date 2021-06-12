import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
// tell you info of the device
import Constants from "expo-constants";

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import Screen from "../components/Screen";

const initialMessages = [
    {
        id: 1,
        title: "#1 Message, this is a long long text here",
        description:
            "what is the price what is the shipping what if this line is really long",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg")
    }
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDlete = (message) => {
        // delete the message from messages
        // delete from the backend
        const newMessages = messages.filter((m) => m.id !== message.id);
        setMessages(newMessages);
    };
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDlete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() =>
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                            image: require("../assets/mosh.jpg")
                        }
                    ])
                }
            />
        </Screen>
    );
}

export default MessagesScreen;
