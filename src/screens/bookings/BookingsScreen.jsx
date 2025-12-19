import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../../contexts';

export default function BookingsScreen() {
	const { colors } = useTheme();

	return (
		<ScrollView 
			className="flex-1 bg-background-primary" 
			contentContainerClassName="p-5"
		>
			<Text className="text-[28px] font-bold text-text-primary mb-2">
				Reservas
			</Text>
			<Text className="text-base text-text-secondary mb-6">
				Suas reservas e hospedagens
			</Text>
			
			<View className="bg-surface-card rounded-2xl p-5 border border-border-light items-center mb-5">
				<Text className="text-5xl mb-3">🏠</Text>
				<Text className="text-lg font-semibold text-text-primary mb-2">
					Minhas Reservas
				</Text>
				<Text className="text-sm text-text-secondary leading-6 text-center">
					Gerencie suas reservas de passeios, transportes e hospedagens em um só lugar.
				</Text>
			</View>

			<View className="items-center py-10">
				<Text className="text-6xl mb-4">📋</Text>
				<Text className="text-base font-semibold text-text-primary mb-2">
					Você ainda não tem reservas
				</Text>
				<Text className="text-sm text-text-muted text-center">
					Explore nossos passeios e faça sua primeira reserva!
				</Text>
			</View>
		</ScrollView>
	);
}
