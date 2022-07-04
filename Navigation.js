import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import MeetingRoom from "./components/MeetingRoom";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
    // style={styles.container}
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MeetingRoom"
          component={MeetingRoom}
          options={{
            headerTitle: "Start a Meeting",
            headerStyle: { backgroundColor: "#1c1c1c" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
