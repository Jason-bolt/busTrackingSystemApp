import React from "react";
import { StyleSheet, Image } from "react-native";
import { MarkerAnimated } from "react-native-maps";

const Bus = ({ uid, location }) => {
	const busImage = "../../assets/bus.png";
	return (
		<MarkerAnimated
			key={uid}
			coordinate={location}
			anchor={{ x: 0.35, y: 0.32 }}
		>
			<Image style={styles.bus} source={require(busImage)} />
		</MarkerAnimated>
	);
};

export default Bus;

const styles = StyleSheet.create({
	bus: {
		width: 30,
		height: 30,
		resizeMode: "contain",
	},
});
