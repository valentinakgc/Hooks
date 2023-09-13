import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formulário</Text>
      
      <TextInput
          style={styles.input}
          placeholder="Nome Completo"
        />

      <TextInput
          style={styles.input}
          placeholder="Gênero"
        />

      <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
        />

      <TextInput
          style={styles.input}
          placeholder="Usuário"
        />

      <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Senha"
        />

      <TextInput
          style={styles.input}
          placeholder="E-mail"
        />

      <TextInput
          style={styles.input}
          placeholder="Confirme seu email"
        />

      <TextInput
          style={styles.input}
          placeholder="CPF"
        />

      <TextInput
          style={styles.input}
          placeholder="Idioma do currículo"
        />

      <TouchableOpacity
          style={styles.button}>
            <Text style={styles.textB}> CADASTRAR </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 32,
    margin: 12,
    marginLeft: 30,
    padding: 10,
    borderRadius: 4,
    width: '80%',
    backgroundColor: '#d9d8da',
    color: '#7A7A7A',

  },

  button: {
    backgroundColor: '#DEBFAF',
    padding: 8,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: '#161417',
    textAlign: 'center',
  },

  textB: {
    fontSize: 14,
    color: '#161417',
    textAlign: 'center',
  }
  
});
