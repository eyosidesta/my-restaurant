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
      {/* <GooglePlacesAutocomplete
      query={{key: "AIzaSyB_HE1zcZjhN6htuVbbFCU0kTqg25goRDw"}}
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
      /> */}
    </View>
  );
}
