import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>blue </Text>
        </View>
        {/* <View style={[styles.card, styles.cardThree]}>
          <Text>blue </Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>blue </Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    padding: 8,
  },
  card: {
    margin: 10,
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  cardOne: {
    backgroundColor: '#ef5354',
  },
  cardTwo: {
    backgroundColor: '#50dbb4',
  },
  cardThree: {
    backgroundColor: '#5da3fa',
  },
  headingText: {
    paddingHorizontal: 8,
    fontSize: 29,
    fontWeight: 'bold',
  },
});

export default FlatCards;
