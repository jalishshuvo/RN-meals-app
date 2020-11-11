import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CategoryGridItem from "../components/CategoryGridItem";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridItem
        onSelect={() =>
          navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          })
        }
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
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

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
