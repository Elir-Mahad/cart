import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	//
	return (
		<View style={styles.container}>
			<TouchableOpacity
				//
				style={styles.button}
				onPress={() => navigation.navigate("Electronics")}
			>
				<Text>Electronics </Text>
			</TouchableOpacity>
			{/*  */}
			<TouchableOpacity
				//
				style={styles.button}
				onPress={() => navigation.navigate("Books")}
			>
				<Text>Books</Text>
			</TouchableOpacity>

			<Text>Home Screen</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	button: {
		backgroundColor: "lightblue",
		margin: 5,
		padding: 10
	}
});
