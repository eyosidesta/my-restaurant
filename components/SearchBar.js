import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({cityHandler}) {
  const [searchInput, setSearchInput] = useState("wow");
  const onInputSearched = () => {
    cityHandler(searchInput);
    console.log(searchInput);
  };
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <TextInput
        placeholder="search"
        onChangeText={(data, detail = null) => {
          setSearchInput(data)
        }}
        style={{
          fontWeight: "bold",
          backgroundColor: "#eee",
          borderRadius: 50,
          marginTop: 17,
          marginLeft: 40,
          marginRight: 10,
          height: 60,
          width: 340,
        }}
      />
      <View
      onStartShouldSetResponder={onInputSearched}
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          right: 56,
          height: 38,
          width: 75,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 28
        }}
      >
        <AntDesign name="clockcircle" size={15} style={{marginRight: 5}}/>
        <Text
          
        >
          search
        </Text>
      </View>
    </View>
  );
}
