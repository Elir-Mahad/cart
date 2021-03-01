import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ShoppingCartIcon = () => {
	return (
		<View style={styles.container}>
			<Icon name="ios-cart" size={30} />
			<Text>0</Text>
		</View>
	);
};

export default ShoppingCartIcon;

const styles = StyleSheet.create({
	container: {
		padding: 5
	}
});
