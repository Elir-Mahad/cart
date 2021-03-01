import React from "react";
import { StyleSheet } from "react-native";
//
import StackNavigator from "./containers/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}
