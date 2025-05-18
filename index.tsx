// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Checkbox from 'expo-checkbox';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // If login is successful, navigate to Home screen
   // Update this
navigation.navigate('Connect'); // Capital C to match the screen name

  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Phindex</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#cbd5e1"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#cbd5e1"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.row}>
        <Checkbox
          value={rememberMe}
          onValueChange={setRememberMe}
          color={rememberMe ? '#facc15' : undefined}
          style={styles.checkbox}
        />
        <Text style={styles.rememberMeText}>Remember me</Text>
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>Forgot password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_Logo.png',
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text style={styles.signupLink}>Sign up for free!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#f1f5f9',
    marginLeft: 10,
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1e293b',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: 'white',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  rememberMeText: {
    color: '#f1f5f9',
    marginRight: 'auto',
  },
  forgotButton: {
    marginLeft: 'auto',
  },
  forgotText: {
    color: '#cbd5e1',
  },
  loginButton: {
    backgroundColor: '#facc15',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#0f172a',
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#facc15',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: 'white',
  },
  signupText: {
    marginTop: 30,
    color: '#94a3b8',
  },
  signupLink: {
    color: '#f87171',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
