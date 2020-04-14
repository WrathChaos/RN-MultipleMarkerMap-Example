import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import MapView, { Marker } from "react-native-maps";

const staticData = [
  { coordinates: { latitude: 37.78383, longitude: -122.405766 } },
  { coordinates: { latitude: 37.78584, longitude: -122.405478 } },
  { coordinates: { latitude: 37.784738, longitude: -122.402839 } },
];

const App = () => {
  return (
    <>
      <MapView
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        initialRegion={{
          latitude: 37.783363,
          longitude: -122.403908,
          latitudeDelta: 0.015922,
          longitudeDelta: 0.015421,
        }}
      >
        {staticData.map((item, index) => (
          <Marker key={index} title="Test" coordinate={item.coordinates} />
        ))}
      </MapView>
    </>
  );
};

export default App;
