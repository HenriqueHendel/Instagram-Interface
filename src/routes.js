import React from "react";
import {Image} from "react-native";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import logo from "./assets/instagram.png";

import Feed from "./pages/feed";

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerTitle:<Image source={logo} />, headerTitleAlign:"center", headerStyle:{}}}>
                <Stack.Screen  name="Feed" component={Feed} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;