import React, { useRef, useMemo, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BottomSheet from '@gorhom/bottom-sheet';
import MapComponent from './components/MapComponent';
import BottomSheetList from './components/BottomSheetList';
import OnlineToggle from './components/OnlineToggle';
import type { Job } from './components/JobCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

const DUMMY_JOBS: Job[] = [
  { id: '1', location: 'Warehouse A', time: '10:00 AM', status: 'upcoming' },
  { id: '2', location: 'Depot B', time: '12:30 PM', status: 'committed' },
  { id: '3', location: 'Station C', time: '3:00 PM', status: 'upcoming' },
  { id: '4', location: 'Warehouse D', time: '5:00 PM', status: 'committed' },
];

const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function App() {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [height * 0.35, height * 0.8], []);
  const [online, setOnline] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.root}>
        <StatusBar style="dark" />
        <View style={styles.flex1}>
          <MapComponent region={INITIAL_REGION} style={{ flex: 1 }} />
          <BottomSheet
            ref={sheetRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={false}
            backgroundStyle={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
          >
            <BottomSheetList
              jobs={DUMMY_JOBS}
              header={<OnlineToggle value={online} onToggle={setOnline} />}
            />
          </BottomSheet>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  flex1: { flex: 1 },
});
