import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  TouchableOpacity, 
} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>L!NK by TravelBugs</Text>
      <TouchableOpacity onPress={() => alert('Button tapped')}>
        <Image source={require('./assets/tb-black.png/')} />

      </TouchableOpacity>
    </SafeAreaView>
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
