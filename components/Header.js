import React from 'react';
import { View, Text } from 'react-native';
import {styles} from "./styles/HeaderStyles.jsx";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Person Manager</Text>
        </View>
    );
}

export default Header;