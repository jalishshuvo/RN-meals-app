import React from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = ({ navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectedMeal={() =>
          navigation.navigate("MealDetail", { mealId: itemData.item.id })
        }
      />
    );
  };

  const catId = navigation.getParam("categoryId");
  // const seclectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  // interest in meals belong to that category
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const seclectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: seclectedCategory.title,
  };
};
export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
