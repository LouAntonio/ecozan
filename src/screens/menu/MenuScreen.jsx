import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts';

export default function MenuScreen() {
	const { colors, isDark, toggleTheme } = useTheme();

	const menuItems = [
		{ icon: '👤', title: 'Meu Perfil', subtitle: 'Editar informações pessoais' },
		{ icon: '🏠', title: 'Hospedagens', subtitle: 'Nossas acomodações' },
		{ icon: '❤️', title: 'Favoritos', subtitle: 'Passeios salvos' },
		{ icon: '🔔', title: 'Notificações', subtitle: 'Configurar alertas' },
		{ icon: '🌍', title: 'Idioma', subtitle: 'Português (BR)' },
		{ icon: '❓', title: 'Ajuda', subtitle: 'FAQ e suporte' },
		{ icon: '📄', title: 'Termos de Uso', subtitle: 'Políticas e privacidade' },
	];

	return (
		<ScrollView
			className="flex-1 bg-background-primary"
			contentContainerClassName="p-5 pb-10"
		>
			<Text className="text-[28px] font-bold text-text-primary mb-2">
				Menu
			</Text>
			<Text className="text-base text-text-secondary mb-6">
				Configurações e preferências
			</Text>

			{/* Toggle de Tema */}
			<TouchableOpacity
				className="bg-surface-card rounded-2xl p-4 border border-border-light flex-row items-center justify-between mb-5"
				onPress={toggleTheme}
				activeOpacity={0.7}
			>
				<View className="flex-row items-center">
					<Text className="text-2xl mr-3">{isDark ? '🌙' : '☀️'}</Text>
					<View>
						<Text className="text-base font-semibold text-text-primary">Tema</Text>
						<Text className="text-[13px] text-text-secondary mt-0.5">
							{isDark ? 'Modo Escuro' : 'Modo Claro'}
						</Text>
					</View>
				</View>
				<View
					className={`w-[50px] h-7 rounded-full justify-center px-0.5 ${isDark ? 'bg-primary-vivid' : 'bg-[#CCCCCC]'
						}`}
				>
					<View
						className={`w-6 h-6 rounded-full bg-white ${isDark ? 'self-end' : ''}`}
					/>
				</View>
			</TouchableOpacity>

			{/* Menu Items */}
			<View className="bg-surface-card rounded-2xl border border-border-light overflow-hidden">
				{menuItems.map((item, index) => (
					<TouchableOpacity
						key={index}
						className={`flex-row items-center p-4 ${index < menuItems.length - 1 ? 'border-b border-border-light' : ''
							}`}
						activeOpacity={0.7}
					>
						<Text className="text-2xl mr-3">{item.icon}</Text>
						<View className="flex-1">
							<Text className="text-base font-medium text-text-primary">{item.title}</Text>
							<Text className="text-[13px] text-text-secondary mt-0.5">{item.subtitle}</Text>
						</View>
						<Text className="text-2xl text-text-muted">›</Text>
					</TouchableOpacity>
				))}
			</View>

			{/* App Version */}
			<Text className="text-center text-text-muted text-xs mt-6">
				Ecozan v1.0.0
			</Text>
		</ScrollView>
	);
}
