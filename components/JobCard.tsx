import { View, Text } from 'react-native';
import { cn } from 'nativewind';
import React from 'react';
import type { FC } from 'react';

export type Job = {
  id: string;
  location: string;
  time: string;
  status: 'upcoming' | 'committed' | 'completed';
};

const statusColors = {
  upcoming: 'text-yellow-600',
  committed: 'text-blue-600',
  completed: 'text-green-600',
};

const JobCard: FC<{ job: Job }> = ({ job }) => (
  <View className="bg-white rounded-xl p-4 mb-2 shadow-md">
    <Text className="text-lg font-bold mb-1">{job.location}</Text>
    <Text className="text-sm text-gray-500 mb-1">{job.time}</Text>
    <Text className={cn('text-xs font-semibold', statusColors[job.status])}>{job.status.toUpperCase()}</Text>
  </View>
);

export default JobCard; 