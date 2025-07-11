import React from 'react';
import { View, Text, Switch } from 'react-native';
import { cn } from 'nativewind';

interface OnlineToggleProps {
  value: boolean;
  onToggle: (val: boolean) => void;
}

const OnlineToggle: React.FC<OnlineToggleProps> = ({ value, onToggle }) => (
  <View className="flex-row items-center justify-between px-4 py-2 bg-white rounded-xl shadow mb-2">
    <Text className="text-base font-semibold">{value ? 'Online' : 'Offline'}</Text>
    <Switch
      value={value}
      onValueChange={onToggle}
      trackColor={{ false: '#d1d5db', true: '#34d399' }}
      thumbColor={value ? '#10b981' : '#f3f4f6'}
    />
  </View>
);

export default OnlineToggle; 