import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Buttons (props) {
    return (
    <View>
        <TouchableOpacity>
        <Text>{props.name}</Text>
        </TouchableOpacity>
    </View>
    )
}