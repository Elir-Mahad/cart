//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React from "react";

// below imports are from react stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import HomeScreen from "./HomeScreen";
import ElectronicsScreen from "./ElectronicsScreen";
import BooksScreen from "./BooksScreen";
import ShoppingCartIcon from "./ShoppingCartIcon";

//!--- Declare the global screen options and initialize the createStackNaviagtor

const globalScreenOptions = {
	// The constant globalScreenOptions stores the below css styles
	// headerStyle: { backgroundColor: "#222831" },
	headerTitleStyle: { color: "black" },
	headerTintiColor: "black",
	headerRight: () => <ShoppingCartIcon />
};

const Stack = createStackNavigator();

const StackNavigator = () => {
	//
	return (
		<Stack.Navigator screenOptions={globalScreenOptions}>
			<Stack.Screen
				name="Home" // Give the component a name
				component={HomeScreen} // Import the component
			/>
			<Stack.Screen
				name="Electronics" // Give the component a name
				component={ElectronicsScreen} // Import the component
			/>
			<Stack.Screen
				name="Books" // Give the component a name
				component={BooksScreen} // Import the component
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
