import CardList from '@/components/cards/CardList';
import GreetingCard from '@/components/cards/GreetingCard';
import ProfileCard from '@/components/cards/ProfileCard';
import React, { createContext, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

// Theme Context
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

const CardsPage: React.FC = () => {
  const [theme, setTheme] = React.useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Fade-in animation for the entire app
  const opacity = useSharedValue(0);
  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 }); // Fade in over 500ms
  }, []);

  // Animated background color for the container
  const backgroundColor = useSharedValue(theme === 'light' ? '#f0f0f0' : '#1c2526');
  useEffect(() => {
    backgroundColor.value = withTiming(theme === 'light' ? '#f0f0f0' : '#1c2526', { duration: 300 });
  }, [theme]);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
    flex: 1,
    opacity: opacity.value,
  }));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Animated.View style={animatedStyle}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard</Text>
          <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
            <Text style={styles.toggleButtonText}>
              {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <GreetingCard message="Welcome to the Dashboard" />
          <ProfileCard />
          <View style={styles.spacer} />
          <Text style={[styles.sectionTitle, { color: theme === 'light' ? '#000' : '#fff' }]}>
            Card List Component
          </Text>
          <CardList />
        </ScrollView>
      </Animated.View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  toggleButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  scrollContainer: {
    padding: 16,
  },
  spacer: {
    height: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CardsPage;