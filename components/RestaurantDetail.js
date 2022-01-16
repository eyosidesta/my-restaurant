import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome";

const items = {
  name: "FIG Sascachiwan",
  description: "Thai Comfort Food",
  image_url:
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg",
  categories: ["Restaurant", "Cafe"],
  price: "$$$",
  reviews: 2909,
  rating: 5,
};
export default function RestaurantDetail() {
  return (
    <View>
      <RestaurantImage image={items.image_url} />
      <RestaurantInfo
        name={items.name}
        description={items.description}
        price={items.price}
        reviews={items.reviews}
        rating={items.rating}
      />
      
    </View>
  );
}

const RestaurantImage = ({ image }) => {
  return (
    <View>
      <Image source={{ uri: image }} style={{ height: 200, width: "100%" }} />
    </View>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 5, marginBottom: 5 }}>{props.name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.titleText}>{props.description} . </Text>
        <Text style={styles.titleText}>{props.price} . </Text>
        <FontAwesome5 name="home" size={20} />
        <Text style={styles.titleText}> . {props.rating} . </Text>
        <FontAwesome5 name="home" size={20} />
        <Text style={styles.titleText}> . {props.reviews} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
})
