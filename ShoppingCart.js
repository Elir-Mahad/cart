import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShoppingCart = () => {
	return (
		<View style={styles.container}>
			<Text>Shopping Cart</Text>
		</View>
	);
};

export default ShoppingCart;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
