/**
 * Ecozan Tourism App - Color Palette
 * 
 * Cores principais para o app de turismo sustentável
 * Estilo: Dark Mode com minimalismo quente
 */

export const colors = {
  // Cores Principais da Marca
  primary: {
    deep: '#1F6F3A',      // Verde Profundo - Base e confiança
    vivid: '#6BAF4A',     // Verde Vivo - Regeneração e ação
    light: '#8BC973',     // Verde Claro - Destaques suaves
  },

  // Cores de Ação e Conectividade
  accent: {
    blue: '#00A3E0',      // Azul Tecnológico - Mapas e conectividade
    blueLight: '#33B5E5', // Azul Claro - Hover states
    blueDark: '#0077A3',  // Azul Escuro - Pressed states
  },

  // Cores Neutras (Dark Mode)
  background: {
    primary: '#121212',   // Fundo principal
    secondary: '#1E1E1E', // Fundo de cards
    tertiary: '#2A2A2A',  // Fundo de inputs/elementos
    elevated: '#333333',  // Elementos elevados
  },

  // Cores de Texto
  text: {
    primary: '#F9F9F9',   // Branco Suave - Texto principal
    secondary: '#B3B3B3', // Texto secundário
    muted: '#808080',     // Texto desabilitado
    inverse: '#121212',   // Texto em fundos claros
  },

  // Cores de Estado
  status: {
    success: '#6BAF4A',   // Sucesso (usa verde vivo)
    warning: '#F5A623',   // Aviso
    error: '#E74C3C',     // Erro
    info: '#00A3E0',      // Informação (usa azul)
  },

  // Cores de Superfície
  surface: {
    card: '#1E1E1E',      // Cards
    modal: '#252525',     // Modais
    overlay: 'rgba(0, 0, 0, 0.7)', // Overlays
  },

  // Cores de Borda
  border: {
    default: '#333333',
    light: '#444444',
    focus: '#6BAF4A',     // Borda de foco (verde vivo)
  },

  // Transparências úteis
  alpha: {
    white10: 'rgba(255, 255, 255, 0.1)',
    white20: 'rgba(255, 255, 255, 0.2)',
    black50: 'rgba(0, 0, 0, 0.5)',
    primary20: 'rgba(31, 111, 58, 0.2)',
  },
};

export default colors;
