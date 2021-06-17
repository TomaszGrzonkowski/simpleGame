import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PlayerIndicator from '../components/PlayerIndicator';
import Card from '../components/Card';

const CARDS = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const MESSAGES = {
  select: 'Select a card',
  confirm: 'Confirm and pass the device',
  guess: 'Guess a card',
  reset: '"Reset" to restart the game.',
  error: 'You have to select a card!',
};

const GameScreen = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [currentMessage, setCurrentMessage] = useState(MESSAGES.select);
  const [winner, setWinner] = useState(null);

  const selectItem = (id) => {
    setSelectedItemId(id);
    setCurrentMessage(MESSAGES.confirm);
  };

  const handleConfirm = () => {
    if (!selectedItemId) {
      setCurrentMessage(MESSAGES.error);
      return;
    }
    setPlayer1Choice(selectedItemId);
    setCurrentPlayer(2);
    setSelectedItemId(null);
    setCurrentMessage(MESSAGES.guess);
  };

  const handleReset = () => {
    setCurrentPlayer(1);
    setSelectedItemId(null);
    setPlayer1Choice(null);
    setWinner(null);
    setCurrentMessage('');
  };

  const handleCheckChoice = (id) => {
    if (winner) return;
    setSelectedItemId(id);
    setPlayer2Choice(id);
    if (player1Choice === id) {
      setWinner(2);
      setCurrentMessage(`Player 2 wins! ${MESSAGES.reset}`);
      return;
    }
    setWinner(1);
    setCurrentMessage(`Player 1 wins! ${MESSAGES.reset}`);
  };

  // useEffect(() => {
  //   if (result) {
  //     setCurrentMessage(`Player ${result} wins! ${messages.reset}`);
  //   }
  // }, [result]);

  useFocusEffect(
    React.useCallback(() => {
      handleReset();
    }, [])
  );
  return (
    <View style={styles.container}>
      <PlayerIndicator playerNumber={currentPlayer} />
      {!!currentMessage && <Text style={styles.text}>{currentMessage}</Text>}
      <View style={styles.cardContainer}>
        {CARDS.map((el) => (
          <Card
            player={currentPlayer}
            isPlayer1Choice={player1Choice === el.id}
            isPlayer2Choice={player2Choice === el.id}
            winner={winner}
            key={el.id}
            selected={selectedItemId === el.id}
            onPress={
              currentPlayer === 1
                ? () => selectItem(el.id)
                : () => handleCheckChoice(el.id)
            }
          />
        ))}
      </View>
      <Button
        title={currentPlayer === 1 ? 'Confirm' : 'Reset'}
        onPress={currentPlayer === 1 ? handleConfirm : handleReset}
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 15,
  },
});
