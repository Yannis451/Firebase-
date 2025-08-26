import React, { useState } from 'react';
import { View, Button, TextInput, Alert, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootPalmaList } from '../Component/RootPalmaList';

type Props = NativeStackScreenProps<RootPalmaList, 'AuthScreen'>;

export default function AuthScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signupFn = () => {
    if (password !== confirmPassword) {
      Alert.alert('❌ Les mots de passe ne correspondent pas');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('✅ Inscription réussie');
        navigation.navigate('HomeScreen'); // Redirection vers Home après inscription
      })
      .catch(() => {
        Alert.alert("❌ Remplir correctemnt les champs d'inscription",);
      });
  };

  const loginFn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('✅ Connexion réussie');
        navigation.navigate('HomeScreen'); // Redirection vers Home après connexion
      })
      .catch(error => {
        Alert.alert('❌ Erreur', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="S'inscrire" onPress={signupFn} />
      <View style={{ height: 10 }} />
      <Button title="Se connecter" onPress={loginFn} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
