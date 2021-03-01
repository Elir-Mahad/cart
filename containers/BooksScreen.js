import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import { Book_items } from "../Data.js";
// import the Book_items constant (which contains an array of books items) from the data.js file
import DataFormater from "../components/DataFormater";
// import the DataFormater component

const BooksScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Books screen</Text>
			<DataFormater products={Book_items} />
			{/* Take the DataFromater component. 
				Push through this component,  
				the Book_items array which is in data.js */}
		</View>
	);
};

export default BooksScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
