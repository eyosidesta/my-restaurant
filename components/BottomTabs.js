import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function ButtomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",

        // borderRadius: 20,
        // bottom: 30,
        marginHorizontal: 30,
        margin: 10,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
      {/* <TouchableOpacity style={{alignItems: "center"}}>
        <AntDesign name="clockcircle" size={24} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: "center"}}>
        <AntDesign name="clockcircle" size={24} />
        <Text>Browse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: "center"}}>
        <AntDesign name="clockcircle" grey size={24} />
        <Text>Grocery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: "center"}}>
        <AntDesign name="clockcircle" size={24} />
        <Text>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: "center"}}>
        <AntDesign name="clockcircle" size={24} />
        <Text>Account</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{ marginBottom: 3, alignSelf: "center" }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
