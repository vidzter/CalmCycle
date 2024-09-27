// _layout.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import EmojiButtonScreen from './EmojiButtonScreen'; // Importing EmojiButtonScreen

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Create a custom Pink Theme
const PinkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff69b4',
    background: '#ffe4e1',
    card: '#ff1493',
    text: '#ff69b4',
    border: '#ff69b4',
    notification: '#ff69b4',
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        try {
          await SplashScreen.hideAsync();
        } catch (error) {
          console.warn("Error hiding splash screen:", error);
        }
      }
    }

    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={PinkTheme}>
      <View style={styles.container}>
        
        {/* Embed the Emoji Button */}
        <EmojiButtonScreen />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "40%",
    backgroundColor: '#ffe4e1', // Ensure background matches your theme
  },
});
