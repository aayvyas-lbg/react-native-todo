import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import TodoInput from "./components/TodoInput";
import TodoOutput from "./components/TodoOutput";

export default function App() {
  const [takeInput, setTakeInput] = useState(false);
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const addTodoToList = (todo) => {
    const todoObj = {
      key: todos.length,
      text: todo,
      done: false,
    };

    setTodos(() => {
      return [...todos, todoObj];
    });
    setCompleted(() => {
      const completedArray = todos.filter((todo) => {
        return todo.done == true;
      });
      return completedArray.length;
    });
    setPending(() => {
      const completedArray = todos.filter((todo) => {
        return todo.done == true;
      });
      return todos.length - completedArray.length;
    });
  };

  const onDone = (key, done) => {
    todos[key].done = done;
    setTodos(() => [...todos]);
    setCompleted(() => {
      const completedArray = todos.filter((todo) => {
        return todo.done == true;
      });
      console.log(completedArray);
      return completedArray.length;
    });
    setPending(() => {
      const completedArray = todos.filter((todo) => {
        return todo.done == true;
      });
      return todos.length - completedArray.length;
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View
        style={{
          marginTop: "5%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "flex-start",
          marginBottom: "2%",
        }}
      >
        <View style={styles.count}>
          <Text style={styles.h1}> {todos.length} </Text>
        </View>
        <View style={styles.h1C}>
          <Text style={styles.h1}> ₸⭕☑⭕</Text>
        </View>

        <View style={takeInput ? styles.addPress : styles.addC}>
          <Pressable
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setTakeInput(true)}
          >
            <Text style={styles.add}>➕</Text>
          </Pressable>
        </View>
      </View>
      <View
        keyboardShouldPersistTaps="always"
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
          <TodoOutput onDone={onDone} todos={todos} />
        </View>
        <View
          style={{
            marginTop: "5%",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View style={styles.completedC}>
            <Text style={styles.completed}>Completed:{completed}</Text>
          </View>
          <View style={styles.notcompletedC}>
            <Text style={styles.notcompleted}>Pending:{pending}</Text>
          </View>
        </View>
      </View>
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
    alignItems: "center",
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
  count: {
    marginTop: "5%",
    borderRadius: 25,
    padding: "1%",
    paddingLeft: "1.5%",
    paddingRight: "1.5%",
    backgroundColor: "#353535a3",
  },
  add: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    padding: "1.5%",
  },
  addPress: {
    marginTop: "5%",
    borderRadius: 25,
    alignContent: "center",
    paddingLeft: "0.5%",
    paddingRight: "0.5%",
    backgroundColor: "#00F81D8E",
  },
  addC: {
    marginTop: "5%",
    borderRadius: 25,
    alignContent: "center",
    paddingLeft: "0.5%",
    paddingRight: "0.5%",
    backgroundColor: "rgba(255,255,255,1)",
  },
  completed: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  completedC: {
    width: 120,
    padding: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25%",
    borderColor: "#00570A",
    borderWidth: "1%",
    backgroundColor: "#003306",
  },
  notcompleted: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  notcompletedC: {
    width: 120,
    padding: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25%",
    borderColor: "#872900",
    borderWidth: "1%",
    backgroundColor: "#4F1A01",
  },
});
