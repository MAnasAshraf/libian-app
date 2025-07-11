import React from 'react';
import MapView, { Region } from 'react-native-maps';
import { ViewStyle } from 'react-native';

interface MapComponentProps {
  style?: ViewStyle;
  region: Region;
}

const MapComponent: React.FC<MapComponentProps> = ({ style, region }) => (
  <MapView
    style={style}
    region={region}
    showsUserLocation
    showsMyLocationButton
  />
);

export default MapComponent; 