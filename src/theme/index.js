/**
 * Ecozan Tourism App - Theme Configuration
 * 
 * Tema consolidado para o app de turismo sustentável
 * 
 * Uso:
 * import { theme, colors, spacing, typography } from './src/theme';
 */

import colors from './colors';
import spacing from './spacing';
import typography from './typography';

// Tema consolidado
export const theme = {
  colors,
  spacing,
  typography,
  
  // Configurações globais
  mode: 'dark',
  
  // Sombras para elevação (dark mode)
  shadows: {
    none: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.6,
      shadowRadius: 16,
      elevation: 16,
    },
  },

  // Animações
  animation: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
};

// Exports nomeados para imports específicos
export { colors, spacing, typography };

// Export default do tema completo
export default theme;
