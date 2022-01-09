import React from 'react';
import { View, Text } from 'react-native';
import Buttons from './Buttons';

export default function HeaderApps() {
    return (
        <View>
            <HeaderButton />
            <Buttons name="gete" />
        </View>
    )
}

const HeaderButton = () => <Text>Devlivery</Text>