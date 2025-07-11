import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import type { FC } from 'react';

export type Job = {
  id: string;
  location: string;
  time: string;
  status: 'upcoming' | 'committed' | 'completed';
};

const statusColors = {
  upcoming: '#d97706',
  committed: '#2563eb',
  completed: '#059669',
};

const JobCard: FC<{ job: Job }> = ({ job }) => (
  <View style={styles.card}>
    <Text style={styles.location}>{job.location}</Text>
    <Text style={styles.time}>{job.time}</Text>
    <Text style={[styles.status, { color: statusColors[job.status] }]}>{job.status.toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default JobCard; 