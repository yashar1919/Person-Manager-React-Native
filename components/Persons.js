import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import {styles} from "./styles/PersonsStyles.jsx";

const Persons = ({ person, deleteHandler, completedHandler }) => {
    return (
        <TouchableOpacity onPress={() => completedHandler(person.key)}>
            <View style={styles.viewComp}>
                <AntDesign
                    name="delete"
                    size={25}
                    color="red"
                    onPress={() => deleteHandler(person.key)}
                />
                <Text
                    style={[
                        styles.personName,
                        person.completed
                            ? { textDecorationLine: "line-through" }
                            : {},
                    ]}
                >
                    {person.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Persons;


