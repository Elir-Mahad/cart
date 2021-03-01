import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
//
import { Entypo } from "@expo/vector-icons";

class DataFormater extends Component {
	//This component is responsible for formating the data thats in data.js
	//!--------------------------------------------------STEP ONE - GRAB THE DATA

	allProducts = (products) => {
		// It contains the function allProducts which stores all the products that are stored in data.js
		return products.map((item, index) => {
			// map (i.e, grab and return) all the products --> products.map
			// classify each product as specific item --> (item, index)
			// classify each product with its unique index --> (item, index)
			return (
				// return
				<View key={index} style={styles.buttonlike}>
					<Button
						// A button
						title={item.name + " - " + item.price}
						// Inside the button
						// grab and display the items name --> item.name
						// grab and display the items price --> item.price
					/>
					<Entypo
						//
						name="heart-outlined"
						size={54}
						color="black"
					/>
				</View>
			);
		});
	};

	//!---------------------------------------------- STEP TWO - DISPLAY THE DATA

	render() {
		// render the above allproducts function within a view container
		return (
			<View style={styles.container}>
				{/*  */}
				{this.allProducts(this.props.products)}
				{/*  */}
			</View>
		);
	}
}
export default DataFormater;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	buttonlike: {
		padding: 10,
		margin: 10,
		backgroundColor: "pink"
	}
});
