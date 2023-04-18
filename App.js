import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
   StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  TouchableOpacity, 
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';



export default function App() {

  return (
    <Provider store={store}>
      <HomeScreen />
      {/* <View style={styles.container}>
        <Text>L!NK by TravelBugs</Text>
        <TouchableOpacity onPress={() => alert('Button tapped')}>
        <Image source={require('./assets/tb-black.png/')} />

        </TouchableOpacity>
      </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '250px',
  },
});
