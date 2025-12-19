/**
 * Ecozan Tourism App - Spacing System
 * 
 * Sistema de espaçamento baseado em múltiplos de 4px
 * Garante consistência visual em toda a interface
 */

export const spacing = {
  // Escala base (múltiplos de 4)
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,

  // Espaçamentos específicos
  gutter: 16,           // Margem lateral padrão das telas
  cardPadding: 16,      // Padding interno de cards
  sectionGap: 24,       // Espaço entre seções
  itemGap: 12,          // Espaço entre itens de lista

  // Border Radius
  radius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,         // Para elementos circulares
  },

  // Tamanhos de componentes
  component: {
    buttonHeight: 48,
    inputHeight: 48,
    iconSize: 24,
    iconSizeSm: 20,
    iconSizeLg: 32,
    avatarSm: 32,
    avatarMd: 48,
    avatarLg: 64,
    cardImageHeight: 180,
    headerHeight: 56,
    tabBarHeight: 64,
  },
};

export default spacing;
