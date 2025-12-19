import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme, colors, typography } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌿 Ecozan</Text>
      <Text style={styles.subtitle}>Turismo Sustentável</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Explore destinos incríveis com consciência ambiental
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.gutter,
  },
  title: {
    ...typography.styles.displayMedium,
    color: colors.primary.vivid,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...typography.styles.bodyLarge,
    color: colors.text.secondary,
    marginBottom: theme.spacing.xl,
  },
  card: {
    backgroundColor: colors.surface.card,
    borderRadius: theme.spacing.radius.md,
    padding: theme.spacing.cardPadding,
    ...theme.shadows.md,
  },
  cardText: {
    ...typography.styles.bodyMedium,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
