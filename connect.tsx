import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, update } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBP1i59QJ_KD0xikN4KzfkLXvTwECcCXaM',
  authDomain: 'nmit-b2dcd.firebaseapp.com',
  databaseURL: 'https://nmit-b2dcd-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'nmit-b2dcd',
  storageBucket: 'nmit-b2dcd.appspot.com',
  messagingSenderId: '444852521210',
  appId: '1:444852521210:web:c3131d7e683cff360da143',
};

// Initialize Firebase app and Realtime Database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function ConnectScreen({ navigation }: any) {
  const [connectionStatus, setConnectionStatus] = useState('');

  const handleConnect = async () => {
    try {
      // Write connection status
      await set(ref(db, 'status/device1'), {
        status: 'connected',
        timestamp: new Date().toISOString(),
      });

      setConnectionStatus('Connected to Firebase');
      Alert.alert('Success', 'Mobile connected to Firebase');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to connect to Firebase');
    }
  };

  const triggerBuzzer = async () => {
    try {
      // Turn buzzer ON
      await update(ref(db, 'sensor_data'), {
        buzzer: true,
      });

      Alert.alert('Buzzer ON', 'Buzzer will turn off automatically in 2 seconds.');

      // Turn buzzer OFF after 2 seconds
      setTimeout(async () => {
        await update(ref(db, 'sensor_data'), {
          buzzer: false,
        });
        console.log('Buzzer turned OFF automatically');
      }, 2000);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to control buzzer');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Phindex</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Please connect your device to secure it.
        </Text>
        
        <TouchableOpacity style={styles.button} onPress={handleConnect}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buzzerButton} onPress={triggerBuzzer}>
          <Text style={styles.buttonText}>Trigger Buzzer</Text>
        </TouchableOpacity>

        {connectionStatus !== '' && (
          <Text style={styles.statusMessage}>{connectionStatus}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2A37',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: 50,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#1B2531',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardText: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4ADE80',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 15,
  },
  buzzerButton: {
    backgroundColor: '#F59E0B', // orange
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statusMessage: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
