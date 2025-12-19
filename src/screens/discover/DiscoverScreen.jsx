import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../../contexts';

export default function DiscoverScreen() {
	const { colors } = useTheme();

	return (
		<ScrollView
			className="flex-1 bg-background-primary"
			contentContainerClassName="p-5"
		>
			<Text className="text-[28px] font-bold text-text-primary mb-2">
				Descubra
			</Text>
			<Text className="text-base text-text-secondary mb-6">
				Explore as melhores experiências em Zanzibar
			</Text>

			<View className="bg-surface-card rounded-2xl p-5 border border-border-light">
				<Text className="text-lg font-semibold text-text-primary mb-2">
					🌴 Bem-vindo ao Ecozan
				</Text>
				<Text className="text-sm text-text-secondary leading-6">
					Descubra passeios incríveis, transporte confortável e hospedagens únicas em Zanzibar.
				</Text>
			</View>
		</ScrollView>
	);
}
