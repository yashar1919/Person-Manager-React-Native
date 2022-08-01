import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const Person = ({ person, clickHandler }) => {
    return (
        <TouchableOpacity onPress={() => { clickHandler(person.key) }}>
            <Text style={styles.person}>{person.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    person: {
        padding: 20,
        marginTop: 30,
        borderWidth: 1,
        borderColor: "orangered",
        borderRadius: 20,
        borderStyle: "dashed",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10
    },
})

export default Person;
