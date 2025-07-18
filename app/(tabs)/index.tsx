import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome to the App!</Text>
      <Link href={"/(tabs)/TaskManager"}
       style={{ marginTop: 20, fontSize: 18, color: 'blue' }}>
        Go to Task Manager
      </Link>
    </View>
  );
};

export default Home;
