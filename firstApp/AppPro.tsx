import React, {useEffect} from 'react';
import {Appearance, View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    Appearance.setColorScheme('dark');
  }, []);
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        This is app pro ashish raghuvanshi
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 200,
  },
  whiteText: {
    color: 'black',
    fontSize: 50,
  },
  blackText: {
    fontSize: 50,
    color: 'white',
  },
});
export default AppPro;
