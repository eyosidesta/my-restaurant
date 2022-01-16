import React from 'react';
import { View, Text } from 'react-native';
import RestaurantDetail from '../components/RestaurantDetail';
import { Divider } from "react-native-elements";
import ListofRestaurants from "../components/ListofRestaurants";

export default function Aboutus() {
    return (
        <View>
            <RestaurantDetail />
            <Divider style={{marginTop: 18, color: "grey", marginBottom: 20}} width={2}/>
            <ListofRestaurants />
        </View>
    )
}