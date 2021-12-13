import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import colors from "../config/colors";
// import MapViewDirections from "react-native-maps-directions";
// import { BottomLookup } from "./BottomLookup";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Bus from "./Bus";

const GOOGLE_MAPS_APIKEY = "######################################";

const fakeBusLocations = [
	{
		uid: "bus1",
		latitude: 5.116202,
		longitude: -1.29152,
	},
	{
		uid: "bus2",
		latitude: 5.115965,
		longitude: -1.290252,
	},
];

const Map = (props) => {
	// Shuttle station colors = '#015680'
	const busImage = "../../assets/bus.png";
	const [busLocations] = useState(fakeBusLocations);

	const [state, setState] = useState({
		pickupsCords: {
			latitude: 5.116202,
			longitude: -1.29152,
			latitudeDelta: 0.015,
			longitudeDelta: 0.0151,
		},
		droplocationCords: {
			latitude: 5.115965,
			longitude: -1.290252,
			latitudeDelta: 0.015,
			longitudeDelta: 0.0151,
		},
	});

	const { pickupCords, droplocationCords } = state;

	return (
		<MapView
			showUserLocation={true}
			showCompass={true}
			style={styles.map}
			loadingEnabled={true}
			initialRegion={{
				latitude: props.latitude,
				longitude: props.longitude,
				latitudeDelta: 0.015,
				longitudeDelta: 0.0151, // Previously 0.0121
			}}
		>
			{busLocations.map((location) => (
				<Bus
					key={location.uid}
					uid={location.uid}
					location={{
						latitude: location.latitude,
						longitude: location.longitude,
					}}
				/>
			))}

			{/* Map Direction */}
			{/* <MapViewDirections
				origin={pickupCords}
				destination={droplocationCords}
				apikey={GOOGLE_MAPS_APIKEY}
			/> */}

			{/* Shuttle station markers */}
			<Marker
				coordinate={{
					latitude: 5.116714,
					longitude: -1.292188,
				}}
				pinColor={colors.shuttleStation}
				title={"Science station"}
			/>
			<Marker
				coordinate={{
					latitude: 5.118549665556092,
					longitude: -1.2916310026199613,
				}}
				pinColor={colors.busStop}
				title={"Celt curve bus stop"}
			/>
			<Marker
				coordinate={{
					latitude: 5.118167535715193,
					longitude: -1.289459469340804,
				}}
				pinColor={colors.busStop}
				title={"Sasakawa bus stop"}
			/>
			<Marker
				coordinate={{
					latitude: 5.117786852653721,
					longitude: -1.2871657571528432,
				}}
				pinColor={colors.busStop}
				title={"Cafeteria bus stop"}
			/>
			<Marker
				coordinate={{
					latitude: 5.133163587993481,
					longitude: -1.287173664755914,
				}}
				pinColor={colors.shuttleStation}
				title={"SRC station"}
			/>
			<Marker
				coordinate={{
					latitude: 5.105492831513745,
					longitude: -1.2858119612204504,
				}}
				pinColor={colors.shuttleStation}
				title={"Old site station"}
			/>
			{/* End of shuttle station markers */}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		// height: Dimensions.get("window").height,
		// width: Dimensions.get("window").width,
		flex: 1,
		marginBottom: 5,
	},
	bus: {
		width: 100,
		height: 40,
		alignItems: "center",
	},
	busIcon: {
		width: 15,
		height: 15,
		borderRadius: 10,
		backgroundColor: colors.primary,
	},
});
