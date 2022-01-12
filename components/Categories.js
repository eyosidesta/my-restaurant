import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/shoping-bags.jpg"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drinks.jpg"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bakery-items.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.jpg"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deal.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee-tea.jpg"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.jpg"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ marginRight: 30, alignItems: "center" }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontWeight: "bold" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
