import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [takeInput, setTakeInput] = useState(false);
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const addTodoToList = (todo) => {
    const newId = id + 1;
    setId(newId);
    const todoObj = {
      key: newId,
      text: todo,
    };
    console.log(todoObj);
    setTodos(() => {
      return [...todos, todoObj];
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={{ marginTop: "5%", alignItems: "center" }}>
        <View style={styles.h1C}>
          <Text style={styles.h1}> TODO </Text>
        </View>
        <Button title="Add Todo" onPress={() => setTakeInput(true)} />
      </View>
      <ScrollView
        style={styles.sv}
        contentContainerStyle={{
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <TodoInput
          takeInput={takeInput}
          setTakeInput={setTakeInput}
          addTodoToList={addTodoToList}
        />
        <View
          style={{
            height: 500,
            backgroundColor: "#1c1c1c",
            borderRadius: "25%",
            marginLeft: "2.5%",
            marginRight: "2.5%",
          }}
        >
          {todos.map((todo, id) => {
            return (
              <Text key={id} style={styles.h2}>
                {todo.text}
              </Text>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  sv: {
    flex: 1,
    backgroundColor: "black",
  },
  h1: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    padding: "1%",
  },
  h2: {
    color: "white",
    fontSize: 20,
    margin: "1%",
    fontWeight: "400",
    padding: "1%",
  },
  h1C: {
    marginTop: "5%",
    borderRadius: 200,
    padding: "1%",
    backgroundColor: "#353535a3",
  },
});
