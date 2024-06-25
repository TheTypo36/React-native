import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const ContactList = () => {
  const contactList = [
    {
      name: 'ashish raghuvanshi',
      img: require('../assests/me.jpg'),
      label: 'developer😁 of this app',
      uid: 1,
    },
    {
      name: 'anvi raghuvanshi',
      img: require('../assests/anvi.jpg'),
      label: 'patner-in-crime❤️, a fellow coder',
      uid: 2,
    },
    {
      name: 'anand raghuvanshi',
      img: require('../assests/bhaiya.jpg'),
      label: 'big brother😎, tremedous knowledge',
      uid: 3,
    },
    {
      name: 'sanjay raghuvanshi',
      img: require('../assests/papa.jpg'),
      label: 'creator and preserver🦾',
      uid: 4,
    },
    {
      name: 'pinky raghuvanshi',
      img: require('../assests/mummy.jpg'),
      label: 'greatest mom 🥰along with someone else ',
      uid: 5,
    },
  ];
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.headingText}>ContactList</Text>

      {contactList.map(({name, img, label, uid}) => (
        <View style={styles.eachList} key={uid}>
          <Image style={styles.img} source={img} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.label}>{label}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    paddingHorizontal: 10,
    fontSize: 29,
    fontWeight: 'bold',
  },
  contactContainer: {
    margin: 6,
  },
  eachList: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'purple',
    margin: 3,
    height: 90,
    flex: 1,
    alignItems: 'center',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'grey',
    shadowOpacity: 0.4,
    borderRadius: 8,
  },
  img: {
    height: 80,
    width: 80,
    marginRight: 20,
    borderRadius: 80 / 2,
    objectFit: 'cover',
  },
  name: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    color: 'white',
  },
});
