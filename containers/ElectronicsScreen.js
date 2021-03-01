import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import { Electronic_items } from "../Data.js";
// import the electronics constant that contains electronics array items from the data.js file
import DataFormater from "../components/DataFormater";
// import the DataFormater component

const ElectronicsScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Electronics screen</Text>
			<DataFormater products={Electronic_items} />
			{/* Import the DataFormater component. 
				Push through this component  
				the Electronic_items array which is in data.js array */}
		</View>
	);
};

export default ElectronicsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
