import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>My App</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('./images/logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navbarTitle: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default HomePage;

