import React from "react";
import { StyleSheet,  View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Screen4 from "./screen4";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
  },
})