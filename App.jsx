import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeProvider, useTheme } from './src/contexts';
import { SplashScreen } from './src/screens';

function MainScreen() {
  const { colors, isDark, toggleTheme, themeMode } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      
      {/* Header com toggle de tema */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.themeToggle} 
          onPress={toggleTheme}
          activeOpacity={0.7}
        >
          <Text style={styles.themeIcon}>{isDark ? '🌙' : '☀️'}</Text>
          <Text style={styles.themeText}>
            {isDark ? 'Dark' : 'Light'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.logo}>🌿 Ecozan</Text>
        <Text style={styles.subtitle}>Turismo Sustentável</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Explore destinos incríveis com consciência ambiental
          </Text>
        </View>

        {/* Indicador de tema atual */}
        <View style={styles.themeIndicator}>
          <Text style={styles.themeIndicatorText}>
            Modo atual: {themeMode === 'dark' ? 'Escuro' : 'Claro'}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <MainScreen />
      )}
    </ThemeProvider>
  );
}

const createStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  themeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  themeIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  themeText: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary.vivid,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: colors.text.secondary,
    marginBottom: 32,
  },
  card: {
    backgroundColor: colors.surface.card,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: colors.border.light,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardText: {
    fontSize: 16,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 24,
  },
  themeIndicator: {
    marginTop: 32,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.primary.vivid + '20',
    borderRadius: 20,
  },
  themeIndicatorText: {
    color: colors.primary.vivid,
    fontSize: 14,
    fontWeight: '500',
  },
});
