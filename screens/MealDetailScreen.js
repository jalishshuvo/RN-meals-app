import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

// ListItem Component instead of creating separate component
const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText> {props.children} </DefaultText>
    </View>
  );
};

const MealDetailScreen = ({ navigation }) => {
  // extracting mealId we loaded in CategoryMealScreen
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(selectedMeal);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText> {selectedMeal.duration}m </DefaultText>
        <DefaultText> {selectedMeal.complexity.toUpperCase()} </DefaultText>
        <DefaultText> {selectedMeal.affordability.toUpperCase()} </DefaultText>
      </View>
      <Text style={styles.title}> Ingredients </Text>
      {/* Vanila JS : map method for rendering list */}

      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}> {ingredient} </ListItem>
      ))}
      <Text style={styles.title}> Steps </Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}> {step} </ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => {
            console.log("Marked as Favourite");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },

  detail: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
