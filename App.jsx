import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SplashScreen } from './src/screens';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <View className="flex-1 bg-background-primary items-center justify-center p-4">
      <Text className="text-4xl font-bold text-primary-vivid mb-1">🌿 Ecozan</Text>
      <Text className="text-lg text-text-secondary mb-8">Turismo Sustentável</Text>
      <View className="bg-surface-card rounded-xl p-6 shadow-lg">
        <Text className="text-base text-text-primary text-center">
          Explore destinos incríveis com consciência ambiental
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
