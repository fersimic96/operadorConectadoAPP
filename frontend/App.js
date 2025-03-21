import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userInfo) => {
    setUser(userInfo);
    // Here you can navigate to your main app screen or perform other actions
    console.log('Login successful:', userInfo);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!user ? (
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      ) : (
        // Add your main app component here
        null
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
