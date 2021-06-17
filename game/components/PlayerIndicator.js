import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayerIndicator = ({ playerNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Player {playerNumber}</Text>
    </View>
  );
};

export default PlayerIndicator;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: 'blue',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
