import { View, FlatList, ViewStyle } from 'react-native';
import { cn } from 'nativewind';
import React from 'react';
import JobCard, { Job } from './JobCard';

interface BottomSheetListProps {
  jobs: Job[];
  header?: React.ReactNode;
  style?: ViewStyle;
}

const BottomSheetList: React.FC<BottomSheetListProps> = ({ jobs, header, style }) => (
  <View style={style} className="flex-1 bg-gray-50 px-4 pt-2">
    {header}
    <FlatList
      data={jobs}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <JobCard job={item} />}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

export default BottomSheetList; 