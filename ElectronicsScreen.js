import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ElectronicsScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Electronics screen</Text>
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