import React from "react";
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Dimensions,
	FlatList,
	TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";

const Profile = (props) => {
	return (
		<View style={styles.container}>
			{/* Name */}
			<View style={styles.group}>
				<Text style={styles.headText}>Name</Text>
				<Text style={styles.text}>John Kweku Doe</Text>
			</View>

			{/* Index number */}
			<View style={styles.group}>
				<Text style={styles.headText}>Index number</Text>
				<Text style={styles.text}>PS/CSC/17/0075</Text>
			</View>

			{/* Floating Button */}
			<View style={styles.floatButton}>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.buttonLogo}
					onPress={() => alert("Alert")}
				>
					<View>
						<Feather name="edit-3" size={24} color={colors.white} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		marginLeft: 12,
		marginRight: 12,
	},
	group: {
		marginTop: 20,
	},
	headText: {
		fontSize: 15,
		color: colors.headText,
		marginBottom: 2,
	},
	text: {
		fontSize: 18,
		color: colors.text,
		fontFamily: "notoserif",
		fontWeight: "bold",
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

// Font families: normal, notoserif, sans-serif, sans-serif-light
// sans-serif-thin, sans-serif-condensed, sans-serif-medium, serif, Roboto, monospace
