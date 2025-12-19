import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Definição das cores para cada tema
export const themes = {
	light: {
		// Cores primárias
		primary: {
			deep: '#1F6F3A',
			vivid: '#4CAF50',
			light: '#81C784',
		},
		// Cores de ação
		accent: {
			blue: '#0077A3',
			blueLight: '#00A3E0',
			blueDark: '#005577',
		},
		// Cores de fundo
		background: {
			primary: '#F5F7F5',
			secondary: '#FFFFFF',
			tertiary: '#E8ECE8',
			elevated: '#FFFFFF',
		},
		// Cores de superfície
		surface: {
			card: '#FFFFFF',
			modal: '#FFFFFF',
			elevated: '#F8FAF8',
		},
		// Cores de texto
		text: {
			primary: '#1A1A1A',
			secondary: '#6B7280',
			muted: '#9CA3AF',
			inverse: '#F9F9F9',
		},
		// Cores de estado
		status: {
			success: '#4CAF50',
			warning: '#F5A623',
			error: '#E74C3C',
			info: '#00A3E0',
		},
		// Bordas e divisores
		border: {
			light: '#E5E7EB',
			medium: '#D1D5DB',
			dark: '#9CA3AF',
		},
	},
	dark: {
		// Cores primárias
		primary: {
			deep: '#1F6F3A',
			vivid: '#6BAF4A',
			light: '#8BC973',
		},
		// Cores de ação
		accent: {
			blue: '#00A3E0',
			blueLight: '#33B5E5',
			blueDark: '#0077A3',
		},
		// Cores de fundo
		background: {
			primary: '#121212',
			secondary: '#1E1E1E',
			tertiary: '#2A2A2A',
			elevated: '#333333',
		},
		// Cores de superfície
		surface: {
			card: '#1E1E1E',
			modal: '#252525',
			elevated: '#2A2A2A',
		},
		// Cores de texto
		text: {
			primary: '#F9F9F9',
			secondary: '#B3B3B3',
			muted: '#808080',
			inverse: '#121212',
		},
		// Cores de estado
		status: {
			success: '#6BAF4A',
			warning: '#F5A623',
			error: '#E74C3C',
			info: '#00A3E0',
		},
		// Bordas e divisores
		border: {
			light: '#333333',
			medium: '#444444',
			dark: '#555555',
		},
	},
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const systemColorScheme = useColorScheme();
	const [themeMode, setThemeMode] = useState(systemColorScheme || 'dark');
	const [isSystemTheme, setIsSystemTheme] = useState(true);

	// Atualiza o tema quando o sistema muda (se estiver seguindo o sistema)
	useEffect(() => {
		if (isSystemTheme && systemColorScheme) {
			setThemeMode(systemColorScheme);
		}
	}, [systemColorScheme, isSystemTheme]);

	const toggleTheme = () => {
		setIsSystemTheme(false);
		setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
	};

	const setTheme = (mode) => {
		setIsSystemTheme(false);
		setThemeMode(mode);
	};

	const useSystemTheme = () => {
		setIsSystemTheme(true);
		if (systemColorScheme) {
			setThemeMode(systemColorScheme);
		}
	};

	const isDark = themeMode === 'dark';
	const colors = themes[themeMode];

	const value = {
		themeMode,
		isDark,
		isSystemTheme,
		colors,
		toggleTheme,
		setTheme,
		useSystemTheme,
	};

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}

export default ThemeContext;
