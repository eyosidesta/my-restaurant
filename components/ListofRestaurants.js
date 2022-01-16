import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { CheckBox, Divider } from "react-native-elements";

const items = [
  {
    name: "Lasagna",
    description: "with butter lettuce, tomato",
    image_url:
      "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg",
    price: "13.50",
  },
  {
    name: "Pissa",
    description: "with butter lettuce, tomato",
    image_url:
      "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg",
    price: "20",
  },
  {
    name: "Burger",
    description: "with butter lettuce, tomato",
    image_url:
      "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg",
    price: "12",
  },
];

export default function ListofRestaurants() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View>
      {items.map((item, index) => (
        <View  style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: 20 }}>
          <CheckBox value={isSelected} style={{ justifyContent: "center" }} />
          <View>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>sauce bechamel</Text>
            <Text style={{ marginTop: 10 }}>{item.price}</Text>
          </View>
          <Image
            source={{
              uri: item.image_url,
            }}
            style={{ width: 80, height: 80, right: 0, borderRadius: 10, justifyContent: "flex-end" }}
          />
          <Divider width={2} />
        </View>
      ))}
    </View>
  );
}
