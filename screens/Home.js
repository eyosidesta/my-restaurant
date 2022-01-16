import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import HeaderApps from "../components/HeaderTabs.js";
import SearchBar from "../components/SearchBar.js";
import Categories from "../components/Categories.js";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems.js";
import BottomTabs from "../components/BottomTabs.js";
import Aboutus from "./Aboutus.js";

const YELP_API_KEY =
  "6uwx1b4wg1wWNMuAIX5INUl1kTcO2yy2JGVE8D0P2IpUz3WIor6ffsWUJLxM4B98zjjH073qOkkk1p9GqXoD0iDa-RSYQtZ8HOhlVeGiKCYWILh1lkYwSIPTWOTiYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Portland");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) => 
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    // <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
    //   <View
    //     style={{
    //       backgroundColor: "white",
    //       paddingTop: 15,
    //       paddingBottom: 10,
    //       marginTop: StatusBar.currentHeight,
    //     }}
    //   >
    //     <HeaderApps activeTab={activeTab} setActiveTab={setActiveTab} />
    //     <SearchBar cityHandler={setCity} />
    //   </View>
    //   <ScrollView showsVerticalScrollIndicator={false}>
    //     <Categories />
    //     <RestaurantItems restaurantData={restaurantData} />
    //   </ScrollView>
    //   {/* <Divider /> */}
    //   <BottomTabs />
    // </SafeAreaView>
    <View>
      <Aboutus />
    </View>
  );
}
