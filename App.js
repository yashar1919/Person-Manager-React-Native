import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Keyboard, Alert, TouchableWithoutFeedback } from 'react-native';
import AddPerson from './components/AddPerson';
import Header from './components/Header';
import Person from './components/Person';

const App = () => {

  const [persons, setPersons] = useState([
    { name: "Yashar", key: "1" },
    { name: "Arshia", key: "2" },
    { name: "Sahba", key: "3" },
    { name: "Majid", key: "4" },
    { name: "Bahram", key: "5" },
    { name: "Nazanin", key: "6" },
    { name: "Mohsen", key: "7" },
    { name: "Javad", key: "8" },
    { name: "Leo", key: "9" },
    { name: "Pezhman", key: "10" },
    { name: "Mahsa", key: "11" },
    { name: "Amir", key: "12" },
    { name: "Shervin", key: "13" },
    { name: "Niloofar", key: "14" }
  ]);


  const [person, setPerson] = useState("");



  const deleteHandler = (key) => {
    setPersons((prevState) => {
      return (prevState.filter(item => item.key !== key))
    });
  }


  const submitHandler = () => {
    if (person.length >= 3) {
      setPersons((prevState) => {
        return ([
          ...prevState,
          {
            name: person,
            key: Math.floor(Math.random() * 100).toString()
          }
        ])
      });
      setPerson("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Error", "Invalid input", [
        { text: "OK", onPress: () => console.log("closed") }
      ]);
    }
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Header */}
        <Header />


        <View style={styles.body}>
          {/* Add Person */}
          <AddPerson
            person={person}
            submitHandler={submitHandler}
            setPerson={setPerson}
          />


          <View style={styles.items}>
            <FlatList
              data={persons}
              renderItem={({ item }) => (
                <Person person={item} clickHandler={deleteHandler} />
              )}
            />


          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    paddingTop: 1,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1
  },
  items: {
    marginTop: 10,
    flex: 1
  },
})

export default App;
