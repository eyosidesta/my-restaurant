import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View styles={{ flexDirection: "row", marginLeft: 10 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details);
        }}
        styles={{
          textInput: {
            fontWeight: "bold",
            backgroundColor: "#eee",
            borderRadius: 50,
            marginTop: 7,
            marginLeft: 10,
            marginRight: 10
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        // renderLeftButton={() => (
        //   <View style={{ marginLeft: 10 }}>
        //     <Ionicons name="location-sharp" size={24} />
        //   </View>
        // )}
        // renderRightButton={() => (
        //   <View
        //     style={{
        //       flexDirection: "row",
        //       marginRight: 8,
        //       backgroundColor: "white",
        //       padding: 9,
        //       borderRadius: 30,
        //       alignItems: "center"
        //     }}
        //   >
        //     <AntDesign
        //       name="clockcircle"
        //       size={11}
        //       style={{ marginRight: 6 }}
        //     />
        //     <Text>Search</Text>
        //   </View>
        // )}
      />
    </View>
  );
}
