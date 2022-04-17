import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MathInput from "../screen/mathInput";
import MathOutput from "../screen/mathOutput";
import { View, Text } from "react-native";
import Splash from "../screen/splash";

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"}>
        <Stack.Screen name="Splash" component={Splash}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="MathInput" component={MathInput}
          options={{
            title: 'Giải toán',
            headerTitleAlign: 'center',
            headerBackVisible: false
          }}
        />
        <Stack.Screen name="MathOutput" component={MathOutput}
          options={{
            title: 'Kết  quả',
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default RootNavigator;