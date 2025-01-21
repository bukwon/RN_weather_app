import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>결과 : {number}</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button title="더하기" onPress={() => setNumber(number + 1)} />
        <Button title="빼기" onPress={() => setNumber(number - 1)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
