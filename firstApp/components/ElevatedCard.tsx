import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😁😁😁</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    paddingHorizontal: 8,
    fontSize: 29,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'grey',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  container: {
    flex: 1,
    padding: 8,
  },
});
