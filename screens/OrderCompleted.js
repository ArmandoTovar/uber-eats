import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";
export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
            setLastOrder(doc.data())
        });
      });
      return ()=> unsubscribe();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems:'center',
        height:'100%'
      }}
    >
        <View style={
            {
                margin:15
            }
        }>
      <LottieView
        style={{
          height: 100,
          alignSelf: "center",
          marginBottom: 30,
        }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text style={{
        fontSize:20,fontWeight:'bold',
      }}>
        Your order at {restaurantName} has been placed for
        {" " + totalUSD}$
      </Text>
      <ScrollView>
      <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={10}/>
      <LottieView
        style={{
          height: 200,
          alignSelf: "center",
          
        }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
      />
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}
