import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootPalmaList } from "./RootPalmaList";
import AuthScreen from "../Ecran/authentification";
import HomeScreen from "../Ecran/Homescreen";

export default function StackNavigationScreen (){
    const Stack=createNativeStackNavigator<RootPalmaList>();
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{headerShown:false}}>
            <Stack.Screen name="AuthScreen" component={AuthScreen} options={{headerShown:false}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}