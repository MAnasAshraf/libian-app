import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface OnlineToggleProps {
  value: boolean;
  onToggle: (val: boolean) => void;
}

const OnlineToggle: React.FC<OnlineToggleProps> = ({ value, onToggle }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{value ? 'Online' : 'Offline'}</Text>
    <Switch
      value={value}
      onValueChange={onToggle}
      trackColor={{ false: '#d1d5db', true: '#34d399' }}
      thumbColor={value ? '#10b981' : '#f3f4f6'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OnlineToggle; 