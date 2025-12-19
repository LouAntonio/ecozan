import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ onFinish }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const leafRotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação de entrada
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Animação da folha girando suavemente
    Animated.loop(
      Animated.sequence([
        Animated.timing(leafRotate, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(leafRotate, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Timer para finalizar splash
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        if (onFinish) onFinish();
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const leafRotation = leafRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['-10deg', '10deg'],
  });

  return (
    <Animated.View 
      style={{ opacity: fadeAnim }}
      className="flex-1 bg-background-primary items-center justify-center"
    >
      <StatusBar style="light" />
      
      {/* Elementos decorativos de fundo */}
      <View className="absolute inset-0 overflow-hidden">
        <View 
          className="absolute w-80 h-80 rounded-full bg-primary-deep/10"
          style={{ top: -100, right: -100 }}
        />
        <View 
          className="absolute w-60 h-60 rounded-full bg-primary-vivid/5"
          style={{ bottom: -50, left: -80 }}
        />
      </View>

      {/* Logo Container */}
      <Animated.View
        style={{
          transform: [
            { scale: scaleAnim },
            { translateY: slideAnim },
          ],
        }}
        className="items-center"
      >
        {/* Ícone da Folha */}
        <Animated.View
          style={{
            transform: [{ rotate: leafRotation }],
          }}
          className="mb-6"
        >
          <View className="w-24 h-24 bg-primary-vivid/20 rounded-full items-center justify-center">
            <Text className="text-6xl">🌿</Text>
          </View>
        </Animated.View>

        {/* Nome do App */}
        <Text className="text-5xl font-bold text-text-primary tracking-wider">
          Ecozan
        </Text>
        
        {/* Tagline */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <Text className="text-lg text-primary-vivid mt-3 tracking-widest uppercase">
            Turismo Sustentável
          </Text>
        </Animated.View>

        {/* Linha decorativa */}
        <View className="flex-row items-center mt-8">
          <View className="w-12 h-0.5 bg-primary-deep" />
          <View className="w-2 h-2 rounded-full bg-primary-vivid mx-3" />
          <View className="w-12 h-0.5 bg-primary-deep" />
        </View>
      </Animated.View>

      {/* Loading indicator */}
      <View className="absolute bottom-20">
        <Animated.View
          style={{ opacity: fadeAnim }}
          className="items-center"
        >
          <View className="flex-row space-x-2">
            <LoadingDot delay={0} />
            <LoadingDot delay={200} />
            <LoadingDot delay={400} />
          </View>
          <Text className="text-text-muted text-sm mt-4">
            Conectando com a natureza...
          </Text>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

// Componente de ponto de loading animado
function LoadingDot({ delay }) {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [delay]);

  return (
    <Animated.View
      style={{ opacity }}
      className="w-2 h-2 rounded-full bg-primary-vivid mx-1"
    />
  );
}
