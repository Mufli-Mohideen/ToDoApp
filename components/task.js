import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";

const Task = (props) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ ...styles.taskItem, opacity: fadeAnim }}>
      <Text style={styles.taskText}>{props.text}</Text>
      <TouchableOpacity>
        <Image
          source={require("../assets/check.png")}
          style={styles.taskIcon}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "#191970",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    shadowColor: "#191970",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    borderColor: "#191970",
  },
  taskText: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#FFF",
    fontWeight: "bold",
  },
  taskIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFF",
  },
});

export default Task;
