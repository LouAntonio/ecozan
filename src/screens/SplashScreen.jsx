import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../contexts';

export default function SplashScreen({ onFinish }) {
  const { colors, isDark } = useTheme();
  
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
      className="flex-1 bg-background-primary items-center justify-center"
      style={{ opacity: fadeAnim }}
    >
      <StatusBar style={isDark ? 'light' : 'dark'} />

      {/* Elementos decorativos de fundo */}
      <View className="absolute inset-0 overflow-hidden">
        <View 
          className="absolute w-80 h-80 rounded-full -top-24 -right-24"
          style={{ backgroundColor: colors.primary.deep + '20' }}
        />
        <View 
          className="absolute w-60 h-60 rounded-full -bottom-12 -left-20"
          style={{ backgroundColor: colors.primary.vivid + '10' }}
        />
      </View>

      {/* Logo Container */}
      <Animated.View
        className="items-center"
        style={{
          transform: [
            { scale: scaleAnim },
            { translateY: slideAnim },
          ],
        }}
      >
        {/* icone do app */}
        <Image 
          source={require('../../assets/iconBG.png')} 
          className="w-[120px] h-[120px]"
        />
        
        {/* Nome do App */}
        <Text className="text-5xl font-bold tracking-widest text-text-primary">
          ECOZAN
        </Text>

        {/* Tagline */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <Text className="text-lg mt-3 tracking-[4px] uppercase text-primary-vivid">
            Turismo Sustentável
          </Text>
        </Animated.View>

        {/* Linha decorativa */}
        <View className="flex-row items-center mt-8">
          <View 
            className="w-12 h-0.5"
            style={{ backgroundColor: colors.primary.deep }}
          />
          <View 
            className="w-2 h-2 rounded-full mx-3"
            style={{ backgroundColor: colors.primary.vivid }}
          />
          <View 
            className="w-12 h-0.5"
            style={{ backgroundColor: colors.primary.deep }}
          />
        </View>
      </Animated.View>

      {/* Loading indicator */}
      <View className="absolute bottom-20">
        <Animated.View 
          className="items-center"
          style={{ opacity: fadeAnim }}
        >
          <View className="flex-row">
            <LoadingDot delay={0} color={colors.primary.vivid} />
            <LoadingDot delay={200} color={colors.primary.vivid} />
            <LoadingDot delay={400} color={colors.primary.vivid} />
          </View>
          <Text className="text-sm mt-4 text-text-muted">
            Conectando com a natureza...
          </Text>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

// Componente de ponto de loading animado
function LoadingDot({ delay, color }) {
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
      className="w-2 h-2 rounded-full mx-1"
      style={{
        opacity,
        backgroundColor: color,
      }}
    />
  );
}
