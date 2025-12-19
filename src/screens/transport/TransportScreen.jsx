import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../../contexts';

export default function TransportScreen() {
	const { colors } = useTheme();

	return (
		<ScrollView 
			className="flex-1 bg-background-primary" 
			contentContainerClassName="p-5"
		>
			<Text className="text-[28px] font-bold text-text-primary mb-2">
				Transporte
			</Text>
			<Text className="text-base text-text-secondary mb-6">
				Viaje com conforto e segurança
			</Text>
			
			<View className="bg-surface-card rounded-2xl p-5 border border-border-light items-center">
				<Text className="text-5xl mb-3">🚐</Text>
				<Text className="text-lg font-semibold text-text-primary mb-2">
					Transfers & Transportes
				</Text>
				<Text className="text-sm text-text-secondary leading-6 text-center">
					Do aeroporto ao hotel, entre cidades ou para seus passeios. Transporte confiável e pontual.
				</Text>
			</View>
		</ScrollView>
	);
}
