import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Basketball from "./pages/Basketball/Basketball";
import Football from "./pages/Football/Football";
const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  tabBarStyle: { backgroundColor: 'black' },
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptionStyle}>
        <Tab.Screen
          name="Football"
          component={Football}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="soccer" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Basketball"
          component={Basketball}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="basketball" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
