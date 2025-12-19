/**
 * Ecozan Tourism App - Typography System
 * 
 * Sistema tipográfico para clareza e legibilidade
 * Estilo: Limpo e moderno para experiência do usuário
 */

import { Platform } from 'react-native';

// Família de fontes padrão do sistema
const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'System',
});

export const typography = {
  // Família de fontes
  fontFamily: {
    regular: fontFamily,
    medium: fontFamily,
    bold: fontFamily,
  },

  // Pesos de fonte
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Tamanhos de fonte
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    display: 40,
  },

  // Altura de linha
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Estilos predefinidos (composições)
  styles: {
    // Títulos
    displayLarge: {
      fontSize: 40,
      fontWeight: '700',
      lineHeight: 48,
      letterSpacing: -0.5,
    },
    displayMedium: {
      fontSize: 32,
      fontWeight: '700',
      lineHeight: 40,
      letterSpacing: -0.25,
    },
    heading1: {
      fontSize: 24,
      fontWeight: '700',
      lineHeight: 32,
    },
    heading2: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 28,
    },
    heading3: {
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 24,
    },

    // Corpo de texto
    bodyLarge: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    },
    bodyMedium: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
    bodySmall: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
    },

    // Labels e botões
    labelLarge: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    labelMedium: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    labelSmall: {
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 16,
      letterSpacing: 0.5,
    },

    // Captions e overlines
    caption: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: 10,
      fontWeight: '500',
      lineHeight: 14,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    },
  },
};

export default typography;
