import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Buttons from "./Buttons";

export default function HeaderApps() {
  return (
    <View style={{flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton text="Delivery"/>
      <HeaderButton text="Pickup"/>
    </View>
  );
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: "black",
        borderRadius: 30}}>
      <Text style={{color: "white", fontSize: 15, fontWeight: "900"}}>{props.text}</Text>
    </TouchableOpacity>
);
