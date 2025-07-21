import React, { useState } from 'react';
import { Animated, Pressable, Text } from 'react-native';
import styles from './GreetingCardStyles';

const GreetingCard = ({ message }: { message: string }) => {
  const [darkMode, setDarkMode] = useState(false);
  const fadeAnim = useState(new Animated.Value(1))[0];

  const toggleTheme = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setDarkMode(!darkMode);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <Animated.View
      style={[
        styles.card,
        {
          backgroundColor: darkMode ? '#000' : '#fff',
          opacity: fadeAnim,
        },
      ]}
    >
      <Text style={[styles.text, { color: darkMode ? '#fff' : '#000' }]}>
        {message}
      </Text>
      <Pressable style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>Dark Mode</Text>
      </Pressable>
    </Animated.View>
  );
};

export default GreetingCard;
