import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url: "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1445,
    rating: 4.5
  },
  {
    name: "Sascachiwan",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg",
    categories: ["Restaurant", "Cafe"],
    price: "$$$",
    reviews: 2909,
    rating: 5
  },
  {
    name: "Moscow Bar",
    image_url: "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg",
    categories: ["Cafe", "Bar"],
    price: "$",
    reviews: 872,
    rating: 3
  }
];
export default function RestaurantItems({restaurantData}) {
  return (
     <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10}}>
      {restaurantData.map((restaurant, index) => (
      <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage image={restaurant.image_url} />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
      ))}
     </TouchableOpacity>
  );
}
const items = require("../assets/images/shoping-bags.jpg");

const RestaurantImage = ({image}) => (
  <>
    <Image
      source={{
        uri: image
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity
      style={{ position: "absolute", right: 20, top: 20, color: "white" }}
    >
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({rating, name}) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {name}
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
      <Text style={{ textAlign: "center" }}>{rating}</Text>
    </View>
  </View>
);
