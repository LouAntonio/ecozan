import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../../contexts';

export default function ToursScreen() {
	const { colors } = useTheme();

	return (
		<ScrollView 
			className="flex-1 bg-background-primary" 
			contentContainerClassName="p-5"
		>
			<Text className="text-[28px] font-bold text-text-primary mb-2">
				Passeios
			</Text>
			<Text className="text-base text-text-secondary mb-6">
				Tours exclusivos pela ilha
			</Text>
			
			<View className="bg-surface-card rounded-2xl p-5 border border-border-light items-center">
				<Text className="text-5xl mb-3">🚤</Text>
				<Text className="text-lg font-semibold text-text-primary mb-2">
					Tours Disponíveis
				</Text>
				<Text className="text-sm text-text-secondary leading-6 text-center">
					Explore praias paradisíacas, mergulhe em águas cristalinas e conheça a cultura local.
				</Text>
			</View>
		</ScrollView>
	);
}
