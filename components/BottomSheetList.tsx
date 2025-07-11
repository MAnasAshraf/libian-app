import { View, FlatList, ViewStyle, StyleSheet } from 'react-native';
import React from 'react';
import JobCard, { Job } from './JobCard';

interface BottomSheetListProps {
  jobs: Job[];
  header?: React.ReactNode;
  style?: ViewStyle;
}

const BottomSheetList: React.FC<BottomSheetListProps> = ({ jobs, header, style }) => (
  <View style={[styles.container, style]}>
    {header}
    <FlatList
      data={jobs}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <JobCard job={item} />}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});

export default BottomSheetList; 