import React from "react";
import { StyleSheet, View } from "react-native";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  // const seclectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  // interest in meals belong to that category
  const avaiableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = avaiableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText> No meals found, maybe check your filters </DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
