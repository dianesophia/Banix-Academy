import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './screens/StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
});
