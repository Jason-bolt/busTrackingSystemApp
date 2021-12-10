import React, { useState, Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Dimensions,
	TouchableOpacity,
	Alert,
} from "react-native";

import MapView from "react-native-maps";
import { Permissions, Location } from "expo";
import Map from "../components/Map";
import { BottomLookup } from "../components/BottomLookup";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor={colors.primary} barStyle="light-content" />
				<View style={styles.header}>
					<Text style={styles.title}>BUS TRACKING SYSTEM</Text>
					<FontAwesome5 name="bus" size={24} color={colors.white} />
				</View>

				{/* Show map */}
				<Map latitude={5.1155} longitude={-1.2909} />

				{/* Floating button */}
				<View style={styles.floatButton}>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.buttonLogo}
						onPress={() => alert("Clicked")}
					>
						<View>
							<MaterialCommunityIcons
								name="directions-fork"
								size={24}
								color={colors.white}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

// export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: StatusBar.currentHeight,
	},
	header: {
		padding: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		elevation: 5,
		backgroundColor: colors.primary,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
		color: colors.white,
	},
	textArea: {
		flex: 1,
		flexDirection: "row",
		marginLeft: 10,
		marginRight: 10,
	},
	text: {
		fontSize: 18,
	},
	values: {
		fontWeight: "bold",
		fontSize: 18,
		marginLeft: 8,
	},
	floatButton: {
		position: "absolute",
		bottom: 10,
		right: 10,
		width: 50,
		height: 50,
		elevation: 5,
		backgroundColor: colors.primary,
		borderRadius: 25,
	},
	buttonLogo: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
