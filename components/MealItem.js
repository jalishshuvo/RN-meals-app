import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = ({
  title,
  onSelectedMeal,
  duration,
  complexity,
  affordability,
  image,
}) => {
  return (
    <View style={styles.MealItem}>
      <TouchableOpacity onPress={onSelectedMeal}>
        <View>
          <View style={{ ...styles.MealRow, ...styles.MealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {" "}
                  {title}{" "}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.MealRow, ...styles.MealDetails }}>
            <Text> {duration}m </Text>
            <Text> {complexity.toUpperCase()} </Text>
            <Text> {affordability.toUpperCase()} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  MealItem: {
    backgroundColor: "#f5f5f5",
    height: 200,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 5,
  },
  MealRow: {
    flexDirection: "row",
  },
  MealHeader: {
    height: "85%",
  },

  MealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
