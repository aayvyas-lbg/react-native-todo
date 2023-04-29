import { useState } from "react";
import { FlatList, Text, StyleSheet, View, Pressable } from "react-native";

const TodoOutput = (props) => {
  return (
    <FlatList
      style={{ margin: "5%" }}
      data={props.todos}
      renderItem={({ item }) => {
        return (
          <View style={styles.todoC}>
            <Pressable
              onPress={() => {
                props.onDone(item.key, !item.done);
              }}
            >
              <View style={styles.checkBox}>
                {item.done && (
                  <View
                    style={{
                      backgroundColor: "grey",
                      padding: "40%",
                      borderRadius: "20%",
                    }}
                  ></View>
                )}
              </View>
            </Pressable>
            <Text style={item.done ? styles.strike : styles.h2}>
              {item.text}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  todoC: {
    padding: "2.5%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: "#3E3E3E",
    borderBottomWidth: "2%",
  },
  h2: {
    color: "white",
    fontSize: 18,
    margin: "1%",
    fontWeight: "400",
    padding: "1%",
  },
  checkBox: {
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    borderColor: "grey",
    borderWidth: "2%",
  },
  strike: {
    textDecorationLine: "line-through",
    color: "white",
    fontSize: 18,
    fontWeight: "100",
    margin: "1%",
    padding: "1%",
  },
});

export default TodoOutput;
