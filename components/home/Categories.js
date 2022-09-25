import { View, Image, Text, ScrollView } from "react-native";
import React, { Component } from "react";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];
export class Categories extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 5,
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingLeft: 20,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map(({ image, text }, index) => (
            <View
              key={"l" + index}
              style={{ alignItems: "center", marginRight: 30 }}
            >
              <Image
                source={image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "900",
                }}
              >
                {text}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Categories;
