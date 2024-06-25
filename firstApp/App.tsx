import React from 'react';
import FlatCards from './components/FlatCards';
import {View, Text, SafeAreaView, Button, ScrollView} from 'react-native';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const data = [
  {
    uri: 'https://images.abbeyroadinstitute.com/wp-content/uploads/sites/8/2022/12/08115334/upscaled-ai-cover-image-example-abbeyroadinstitute-sydney-withtext-scaled.jpg',
    cardTitle: 'A JAZZ Night',
    cardDescription:
      'Night life is common these day. Get drunk and listening to the jazz are best way to spend the weekday for some, but not me.',
    cardLabel: 'a local bar having a jazz night',
    cardFooter: '1 hour away',
  },
  {
    uri: 'https://th.bing.com/th/id/R.00237e5e7d975b45307a88afa556f9ad?rik=x7eXZla8YuFqSw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2ffacebook-cover-balloons-sunset-view-facebook-cover.jpg&ehk=MKBwru39fZ5J46RF3AJ9YPGMLx2eR%2fMHlwn9UAkok5s%3d&risl=&pid=ImgRaw&r=0',
    cardTitle: 'Hot Air Balloon',
    cardDescription:
      'As you can see the sky is filled with hot air boolloon. Because it is tradition in Goa to go on ride in boolloon, on every saturday.',
    cardLabel: 'A fun activity in Goa.',
    cardFooter: '12 min away',
  },
  {
    uri: 'https://th.bing.com/th/id/R.c7d538837795e02351ab14ab9b33359f?rik=QZS%2fim6kmUPVzQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f03%2f29%2f494849-Axtone-album_covers.jpg&ehk=DRfA%2b5W3uguoBnCBCoObLYey%2fGfqwG1AAk69%2bWZt%2ff4%3d&risl=&pid=ImgRaw&r=0',
    cardTitle: 'Full Moon Night',
    cardDescription:
      'A activites mostly enjoyed by werewolf and mostly happens in the movies. Some famous movies are x-men series.',
    cardLabel: 'A werewolf activities.',
    cardFooter: 'lifetime min away',
  },
];
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollView>
          <ElevatedCard />
        </ScrollView>
        {data.map((item, index) => (
          <FancyCard
            key={index}
            url={item.uri}
            cardTitle={item.cardTitle}
            cardDescription={item.cardDescription}
            cardLabel={item.cardLabel}
            cardFooter={item.cardFooter}
          />
        ))}
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
