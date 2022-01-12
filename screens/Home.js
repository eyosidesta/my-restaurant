import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import HeaderApps from "../components/HeaderTabs.js";
import SearchBar from "../components/SearchBar.js";
import Categories from "../components/Categories.js";

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", paddingTop: 15, paddingBottom: 60, marginTop: StatusBar.currentHeight}}>
      <HeaderApps />
      <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
}
