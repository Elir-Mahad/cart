import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ShoppingCartIcon = () => {
	return (
		<View style={styles.container}>
			<View style={styles.itemcount}>
				<Text>0</Text>
			</View>
			<Icon name="ios-cart" size={30} />
		</View>
	);
};

export default ShoppingCartIcon;

const styles = StyleSheet.create({
	container: {
		padding: 5
	},
	itemcount: {
		position: "absolute",
		height: 30,
		width: 30,
		borderRadius: 15,
		backgroundColor: "lightblue",
		right: 35,
		bottom: 15,
		alignItems: "center",
		justifyContent: "center"
	}
});
