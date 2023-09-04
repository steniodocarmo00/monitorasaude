import { Pressable, Modal, View } from "native-base";
import MapView, {
  PROVIDER_GOOGLE,
  MapViewProps,
  LatLng,
  Marker,
  Circle,
} from "react-native-maps";
import { useState } from "react";
type Props = MapViewProps & {
  coordinates: LatLng[];
};

export function Map({ coordinates, ...rest }: Props) {
  const lastCoordinate = coordinates[coordinates.length - 1];

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%" }}
        region={{
          latitude: lastCoordinate.latitude,
          longitude: lastCoordinate.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        {...rest}
      >
        <Marker coordinate={coordinates[0]} />
          
      </MapView>
    </View>
  );
}
