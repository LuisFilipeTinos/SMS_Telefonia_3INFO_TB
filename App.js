import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as SMS from 'expo-sms';

export default function App() {

  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [historico, setHistorico] = useState([]);

  function limparNumero(texto) {
    return texto.replace(/\D/g, '');
  }

  function numeroValido() {
    const limpo = limparNumero(numero);
    if (limpo.length < 8) {
      Alert.alert('Número inválido', 'Digite um número com pelo menos 8 dígitos.');
      return false;
    }
    return true;
  }


  return (
    <View>

    </View>
  );
}