import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ElevatedCard from './ElevatedCard';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            what's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg',
          }}
          style={styles.CardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2} style={styles.red}>
            Just Like Every year, Javascript brings in new features. This year
            Javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.youtube.com/')}>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    paddingHorizontal: 10,
    fontSize: 29,
    fontWeight: 'bold',
  },
  card: {
    width: 375,
    height: 340,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  elevatedCard: {
    backgroundColor: 'lavender',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowColor: 'gray',
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  CardImage: {
    height: 180,
  },
  bodyContainer: {
    padding: 10,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
    marginBottom: 4,
  },
  footerText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 13,
    marginBottom: 12,
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
