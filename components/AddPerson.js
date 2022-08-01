import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

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

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "orangered",
        fontSize: 15,
    },
});
