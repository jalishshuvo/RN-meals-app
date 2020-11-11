import React from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  // const seclectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  // interest in meals belong to that category
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const seclectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: seclectedCategory.title,
  };
};
export default CategoryMealScreen;

const styles = StyleSheet.create({});
