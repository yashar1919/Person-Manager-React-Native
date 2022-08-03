import React from "react";
import { View, TextInput, Button } from "react-native";
import {styles} from "./styles/AddPersonStyles.jsx";

const AddPerson = ({ submitHandler, setPerson, person }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter Name..."
                placeholderTextColor="darkgrey"
                onChangeText={(value) => { setPerson(value) }}
                value={person}
            />
            <Button
                onPress={submitHandler}
                title="Add New Person"
                color="orange"
            />
        </View>
    );
};

export default AddPerson;
