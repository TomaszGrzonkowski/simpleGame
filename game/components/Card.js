import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({
  isPlayer1Choice,
  isPlayer2Choice,
  player,
  winner,
  selected,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={
          selected ? [styles.container, styles.selected] : styles.container
        }
      >
        <Text style={styles.text}>Pick</Text>
        {selected && <Text>Choosen card</Text>}
        {((player === 1 && selected) || (winner === 2 && isPlayer2Choice)) && (
          <Icon name="check-circle-outline" size={30} color={'green'} />
        )}
        {player === 2 && winner === 1 && (
          <View>
            {isPlayer1Choice && (
              <Icon name="check-circle-outline" size={30} color={'green'} />
            )}
            {isPlayer2Choice && (
              <Icon name="alpha-x-circle-outline" size={30} color={'red'} />
            )}
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
    width: 150,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
  selected: {
    backgroundColor: '#d3d3d3',
  },
});
