import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface FancyCardProps {
  url: string; // Define the type for the URL prop
  cardTitle: string;
  cardDescription: string;
  cardLabel: string;
  cardFooter: string;
}

const FancyCard: React.FC<FancyCardProps> = ({
  url,
  cardTitle,
  cardDescription,
  cardFooter,
  cardLabel,
}) => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: url, // Use the url directly here
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{cardTitle} </Text>
          <Text style={styles.cardLabel}>{cardDescription}</Text>
          <Text style={styles.cardDescription}>{cardLabel}</Text>
          <Text style={styles.cardFooter}>{cardFooter}</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  cardBody: {},
  headingText: {
    paddingHorizontal: 10,
    fontSize: 29,
    fontWeight: 'bold',
  },
  card: {
    width: 375,
    height: 360,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  cardElevated: {
    backgroundColor: 'lavender',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'gray',
  },
  cardImage: {
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    height: 180,
    marginBottom: 8,
  },
  cardTitle: {
    color: 'purple',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 20,
    marginBottom: 6,
  },
  cardLabel: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
    marginBottom: 4,
  },
  cardDescription: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 13,
    marginBottom: 12,
  },
  cardFooter: {
    color: 'darkgray',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
