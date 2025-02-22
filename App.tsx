import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { MeuBotao } from './componentes/MeuBotao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello world</Text>
      <MeuBotao handlePress={() => console.log('clicou')} titulo='Clicar' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
