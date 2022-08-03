import React, { useState } from 'react';
import { View, FlatList, Keyboard, Alert, TouchableWithoutFeedback } from 'react-native';
import AddPerson from './components/AddPerson';
import Header from './components/Header';
import Persons from './components/Persons';
import {styles} from "./AppStyles.jsx";

const App = () => {

  const [persons, setPersons] = useState([
    { name: "Yashar", key: "1", completed: false },
    { name: "Arshia", key: "2", completed: false },
    { name: "Sahba", key: "3", completed: false },
    { name: "Majid", key: "4", completed: false },
    { name: "Bahram", key: "5", completed: false },
    { name: "Nazanin", key: "6", completed: false },
    { name: "Mohsen", key: "7", completed: false },
    { name: "Javad", key: "8", completed: false },
    { name: "Leo", key: "9", completed: false },
    { name: "Pezhman", key: "10", completed: false },
    { name: "Mahsa", key: "11", completed: false },
    { name: "Amir", key: "12", completed: false },
    { name: "Shervin", key: "13", completed: false },
    { name: "Niloofar", key: "14", completed: false }
  ]);


  const [person, setPerson] = useState("");



  const deleteHandler = (key) => {
    setPersons((prevState) => {
      return (prevState.filter(item => item.key !== key))
    });
  }

  const completedHandler = (key) => {
    const allPersons = [...persons];
    const personIndex = allPersons.findIndex(item => item.key === key);
    const person = allPersons[personIndex];
    person.completed = !person.completed;
    allPersons[personIndex] = person;

    setPerson(allPersons);
  }


  const submitHandler = () => {
    if (person.length >= 3) {
      setPersons((prevState) => {
        return ([
          ...prevState,
          {
            name: person,
            key: Math.floor(Math.random() * 100).toString(),
            completed: false
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
                <Persons person={item} deleteHandler={deleteHandler} completedHandler={completedHandler} />
              )}
            />


          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


export default App;
