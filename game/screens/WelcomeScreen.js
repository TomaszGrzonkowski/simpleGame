import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleNavigateToGame = () => {
    navigation.navigate('Game');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome in Guessing Game</Text>
      <Text style={styles.text}>
        Game is meant for two players. First player selects one of the four
        cards. Then he hands his phone to another player who has to guess which
        card was selected.
      </Text>
      <Button title="Start now!" onPress={handleNavigateToGame} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 15,
    marginTop: 15,
  },
});
