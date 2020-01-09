import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const myName = "Hunter";
  return (
    <View>
      <Text style={styles.headerStyles}>
        Getting started with react native!
      </Text>
      <Text style={styles.textStyle}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  headerStyles: {
    fontSize: 45
  }
});

export default ComponentsScreen;
