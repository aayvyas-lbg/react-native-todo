import { useState } from "react";
import {
  ActivityIndicator,
  DatePickerIOSBase,
  Pressable,
  TextInput,
} from "react-native";
import { View, Text, StyleSheet, Modal, Button } from "react-native";

const TodoInput = (props) => {
  const [pressed, setPressed] = useState(false);
  const [todo, setTodo] = useState("");
  const [visible, setVisible] = useState(true);
  return (
    <Modal
      visible={props.takeInput}
      style={{ backgroundColor: "red" }}
      animationType="slide"
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.h1}>Let's get Started!!</Text>
          <View style={styles.input}>
            {visible ? (
              <TextInput
                onChangeText={(value) => {
                  setTodo(value);
                }}
                value={todo}
                placeholderTextColor="white"
                style={{
                  width: "100%",
                  padding: "4%",
                  fontSize: 20,
                  color: "white",
                }}
                placeholder="Enter Text"
              />
            ) : (
              <ActivityIndicator style={{ padding: "4%" }} />
            )}
          </View>
          <View style={pressed ? styles.pressedBtn : styles.btn}>
            <Pressable
              disabled={!visible}
              onPressIn={() => setPressed(true)}
              onPressOut={() => {
                // props.addTodoToList(todo);
                // setTodo(() => {
                //   return "";
                // });
                // setVisible(false);
                setTimeout(() => {
                  setVisible(true);
                }, 5000);
                setPressed(false);
              }}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.h2}>Add</Text>
            </Pressable>
          </View>
        </View>
        <Button title="Cancel" onPress={() => props.setTakeInput(false)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "black",
    height: "100%",
    justifyContent: "flex-start",
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "red",
    height: "50%",
    marginTop: "20%",
    margin: "5%",
    borderRadius: "25%",
    backgroundColor: "#1c1c1c",
  },
  input: {
    backgroundColor: "#353535a3",
    borderColor: "#363636ff",
    borderWidth: "1%",
    width: "90%",
    borderRadius: "15%",
  },
  h1: {
    fontSize: 38,
    color: "white",
  },
  h2: {
    fontSize: 25,
    color: "white",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    paddingTop: "4%",
    paddingBottom: "4%",
    paddingRight: "2.5%",
    paddingLeft: "2.5%",
    width: "50%",
    borderRadius: "12.5%",
  },
  pressedBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "4%",
    paddingBottom: "4%",
    paddingRight: "2.5%",
    paddingLeft: "2.5%",
    width: "49%",
    borderWidth: "2%",
    borderColor: "#015f28",
    borderRadius: "12.5%",
    backgroundColor: "#00431c",
  },
});

export default TodoInput;
