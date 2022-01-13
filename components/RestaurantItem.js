import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 20 }}>
      <View styl={{ marginTop: 30, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}
const items = require("../assets/images/shoping-bags.jpg");

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content8426.jpg",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity
      style={{ position: "absolute", right: 20, top: 10, color: "white" }}
    >
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Farmhouse Kitchen Thai Cuisine
      </Text>
      <Text style={{ fontSize: 13, color: "grey" }}>30-40 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
      }}
    >
      <Text style={{ textAlign: "center" }}>4.5</Text>
    </View>
  </View>
);
