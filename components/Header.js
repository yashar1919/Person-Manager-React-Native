import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Person Manager</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 40,
        backgroundColor: "orangered",
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
})

export default Header;