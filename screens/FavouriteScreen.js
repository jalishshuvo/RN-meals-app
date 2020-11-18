import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const FavouriteScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  // dummy-fav-meals
  // const favMeals = avaiableMeals.filter(
  //   (meal) => meal.id === "m1" || meal.id === "m2"
  // );
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText> No Favorite Meals found. Start Adding Some</DefaultText>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={navigation} />;
};

FavouriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
