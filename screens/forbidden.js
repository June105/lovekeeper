import { StyleSheet, Text, View } from 'react-native';

export default function Forbidden() {
  return (
    <View style={styles.container}>
      <Text>금칙어</Text>
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