import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Buttons (props) {
    const [propsVal, setPropsVal] = useState(props.name);
    return (
    <View>
        <TouchableOpacity 
        onPress={() => setPropsVal("wow")}>
        <Text>{propsVal}</Text>
        </TouchableOpacity>
    </View>
    )
}