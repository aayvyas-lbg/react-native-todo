import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  DatePickerIOSBase,
  Pressable,
  TextInput,
} from "react-native";
import { View, Text, StyleSheet, Modal, Button } from "react-native";

const TodoInput = (props) => {
  const [pressed, setPressed] = useState(false);
  const [todo, setTodo] = useState("");
  const [visible, setVisible] = useState(true);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <Modal visible={props.takeInput} animationType="slide">
      <View style={styles.modal}>
        <View style={styles.container}>
          {error ? (
            <Text style={styles.h1}>Try Again❓</Text>
          ) : (
            <Text style={styles.h1}>Let's get Started!!</Text>
          )}

          <View style={error ? styles.error : styles.input}>
            {visible ? (
              <TextInput
                onChangeText={(value) => {
                  setError(false);
                  setTodo(value);
                  setDisabled(() => false);
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
          <View
            style={
              pressed
                ? styles.pressedBtn
                : disabled
                ? styles.disabledBtn
                : styles.btn
            }
          >
            <Pressable
              disabled={disabled}
              onPressIn={() => {
                setPressed(true);
                if (todo == "" || todo == undefined) {
                  setError(() => true);
                  setDisabled(() => true);
                  console.log(error);
                }
              }}
              onPressOut={() => {
                setPressed(false);
                if (!error) {
                  setDisabled(() => true);
                  props.addTodoToList(todo);
                  setTodo(() => {
                    return "";
                  });

                  setVisible(false);
                  setTimeout(() => {
                    setVisible(true);
                    setDisabled(() => false);
                    props.setTakeInput(false);
                  }, 2000);
                }
              }}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                disabled={disabled}
                style={disabled ? styles.h2disabled : styles.h2}
              >
                Add
              </Text>
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
    marginLeft: "5%",
    marginRight: "5%",
    fontSize: 30,
    color: "white",
  },
  h2: {
    fontSize: 25,
    color: "palegreen",
  },
  h2disabled: {
    fontSize: 25,
    color: "#A0A0A0",
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
    borderColor: "#015f28",
    borderRadius: "12.5%",
    opacity: "0.5",
    backgroundColor: "#00431c",
  },
  error: {
    borderWidth: "2%",
    backgroundColor: "#750000A3",
    borderColor: "#A90202FF",
    borderWidth: "1%",
    width: "90%",
    borderRadius: "15%",
  },
  disabledBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(48,48,48,0.64)",
    paddingTop: "4%",
    paddingBottom: "4%",
    paddingRight: "2.5%",
    paddingLeft: "2.5%",
    width: "50%",
    borderRadius: "12.5%",
  },
});

export default TodoInput;
