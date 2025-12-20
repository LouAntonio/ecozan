import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts';

const { width, height } = Dimensions.get('window');

const pages = [
	{
		key: 'one',
		title: 'Descubra Lugares Incríveis',
		description: 'Explore destinos sustentáveis e experiências locais autênticas selecionadas especialmente para você.',
		image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
		icon: 'earth',
		color: '#3B82F6',
		gradient: ['#3B82F6', '#2563EB'],
	},
	{
		key: 'two',
		title: 'Reserve com Facilidade',
		description: 'Hotéis exclusivos, tours inesquecíveis e transportes confiáveis - tudo em um só lugar.',
		image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
		icon: 'calendar',
		color: '#10B981',
		gradient: ['#10B981', '#059669'],
	},
	{
		key: 'three',
		title: 'Viaje Conscientemente',
		description: 'Faça escolhas sustentáveis e contribua para preservar nosso planeta enquanto explora o mundo.',
		image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
		icon: 'leaf',
		color: '#F59E0B',
		gradient: ['#F59E0B', '#D97706'],
	},
];

export default function OnboardingScreen({ onDone }) {
	const { colors, isDark } = useTheme();
	const scrollRef = useRef(null);
	const [index, setIndex] = useState(0);
	const fadeAnim = useRef(new Animated.Value(1)).current;
	const scaleAnim = useRef(new Animated.Value(1)).current;

	function handleNext() {
		if (index < pages.length - 1) {
			// Animação de transição
			Animated.sequence([
				Animated.parallel([
					Animated.timing(fadeAnim, {
						toValue: 0.7,
						duration: 200,
						useNativeDriver: true,
					}),
					Animated.timing(scaleAnim, {
						toValue: 0.95,
						duration: 200,
						useNativeDriver: true,
					}),
				]),
				Animated.parallel([
					Animated.timing(fadeAnim, {
						toValue: 1,
						duration: 300,
						useNativeDriver: true,
					}),
					Animated.timing(scaleAnim, {
						toValue: 1,
						duration: 300,
						useNativeDriver: true,
					}),
				]),
			]).start();

			scrollRef.current?.scrollTo({ x: (index + 1) * width, animated: true });
			setIndex(index + 1);
		} else {
			onDone && onDone();
		}
	}

	function handleSkip() {
		onDone && onDone();
	}

	const currentPage = pages[index];

	return (
		<View 
			className="flex-1"
			style={{ backgroundColor: colors.background.primary }}
		>
			{/* Header com Skip */}
			<View className="flex-row justify-between items-center px-6 pt-12 pb-4">
				<View
					className="px-3 py-1 rounded-full"
					style={{ backgroundColor: `${currentPage.color}20` }}
				>
					<Text
						className="text-xs font-bold"
						style={{ color: currentPage.color }}
					>
						{index + 1} de {pages.length}
					</Text>
				</View>
				<TouchableOpacity 
					onPress={handleSkip}
					className="px-4 py-2 rounded-full"
					style={{ backgroundColor: colors.surface.card }}
					activeOpacity={0.7}
				>
					<Text
						className="font-semibold text-sm"
						style={{ color: colors.text.primary }}
					>
						Pular
					</Text>
				</TouchableOpacity>
			</View>

			{/* ScrollView das páginas */}
			<ScrollView
				ref={scrollRef}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				onMomentumScrollEnd={(e) => {
					const page = Math.round(e.nativeEvent.contentOffset.x / width);
					setIndex(page);
				}}
			>
				{pages.map((page, i) => (
					<Animated.View
						key={page.key}
						className="items-center justify-center px-6"
						style={{
							width,
							opacity: i === index ? fadeAnim : 0.5,
							transform: [{ scale: i === index ? scaleAnim : 0.9 }],
						}}
					>
						{/* Container da imagem com gradiente */}
						<View className="items-center mb-8">
							<View
								className="rounded-full p-6 mb-6"
								style={{
									backgroundColor: `${page.color}15`,
									shadowColor: page.color,
									shadowOffset: { width: 0, height: 8 },
									shadowOpacity: 0.3,
									shadowRadius: 20,
									elevation: 10,
								}}
							>
								<View
									className="w-24 h-24 rounded-full items-center justify-center"
									style={{
										backgroundColor: page.color,
										shadowColor: page.color,
										shadowOffset: { width: 0, height: 4 },
										shadowOpacity: 0.4,
										shadowRadius: 12,
										elevation: 5,
									}}
								>
									<Ionicons name={page.icon} size={48} color="#FFFFFF" />
								</View>
							</View>

							{/* Imagem de fundo com overlay */}
							<View
								className="rounded-3xl overflow-hidden"
								style={{
									width: width * 0.85,
									height: height * 0.35,
									shadowColor: '#000',
									shadowOffset: { width: 0, height: 8 },
									shadowOpacity: 0.15,
									shadowRadius: 16,
									elevation: 8,
								}}
							>
								<Image
									source={{ uri: page.image }}
									style={{ width: '100%', height: '100%' }}
									resizeMode="cover"
								/>
								{/* Overlay gradiente */}
								<View
									className="absolute inset-0"
									style={{
										backgroundColor: `${page.color}20`,
									}}
								/>
								{/* Badge no canto */}
								<View
									className="absolute top-4 right-4 px-3 py-1.5 rounded-full flex-row items-center"
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.95)',
										shadowColor: '#000',
										shadowOffset: { width: 0, height: 2 },
										shadowOpacity: 0.2,
										shadowRadius: 4,
									}}
								>
									<Ionicons name="checkmark-circle" size={16} color={page.color} />
									<Text
										className="text-xs font-bold ml-1"
										style={{ color: page.color }}
									>
										Verificado
									</Text>
								</View>
							</View>
						</View>

						{/* Conteúdo de texto */}
						<View className="items-center px-4">
							<Text
								className="text-3xl font-bold text-center mb-4"
								style={{ 
									color: colors.text.primary,
									lineHeight: 38,
								}}
							>
								{page.title}
							</Text>
							<Text
								className="text-base text-center leading-6"
								style={{ color: colors.text.secondary }}
							>
								{page.description}
							</Text>

							{/* Features do slide */}
							<View className="flex-row mt-6 gap-4">
								{i === 0 && (
									<View style={{ flexDirection: 'row' }}>
										<FeatureBadge icon="location" text="100+ Destinos" color={page.color} />
										<FeatureBadge icon="star" text="Avaliados" color={page.color} />
									</View>
								)}
								{i === 1 && (
									<View style={{ flexDirection: 'row' }}>
										<FeatureBadge icon="flash" text="Instantâneo" color={page.color} />
										<FeatureBadge icon="shield-checkmark" text="Seguro" color={page.color} />
									</View>
								)}
								{i === 2 && (
									<View style={{ flexDirection: 'row' }}>
										<FeatureBadge icon="leaf" text="Eco-Friendly" color={page.color} />
										<FeatureBadge icon="heart" text="Responsável" color={page.color} />
									</View>
								)}
							</View>
						</View>
					</Animated.View>
				))}
			</ScrollView>

			{/* Footer com indicadores e botão */}
			<View className="px-6 pb-10">
				{/* Indicadores de página melhorados */}
				<View className="flex-row justify-center items-center mb-6">
					{pages.map((page, i) => (
						<TouchableOpacity
							key={i}
							onPress={() => {
								scrollRef.current?.scrollTo({ x: i * width, animated: true });
								setIndex(i);
							}}
							activeOpacity={0.7}
						>
							<View
								className="mx-1.5 rounded-full"
								style={{
									width: i === index ? 32 : 8,
									height: 8,
									backgroundColor: i === index ? page.color : colors.text.muted + '40',
									shadowColor: i === index ? page.color : 'transparent',
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.4,
									shadowRadius: 4,
									elevation: i === index ? 3 : 0,
								}}
							/>
						</TouchableOpacity>
					))}
				</View>

				{/* Botão de ação principal */}
				<TouchableOpacity
					onPress={handleNext}
					activeOpacity={0.9}
					className="rounded-2xl py-4 px-8 flex-row items-center justify-center"
					style={{
						backgroundColor: currentPage.color,
						shadowColor: currentPage.color,
						shadowOffset: { width: 0, height: 6 },
						shadowOpacity: 0.4,
						shadowRadius: 12,
						elevation: 8,
					}}
				>
					<Text className="text-white font-bold text-lg mr-2">
						{index < pages.length - 1 ? 'Próximo' : 'Começar Agora'}
					</Text>
					<Ionicons 
						name={index < pages.length - 1 ? 'arrow-forward' : 'checkmark-circle'} 
						size={22} 
						color="#FFFFFF" 
					/>
				</TouchableOpacity>

				{/* Texto adicional no último slide */}
				{index === pages.length - 1 && (
					<Text
						className="text-center text-xs mt-4"
						style={{ color: colors.text.tertiary }}
					>
						Ao continuar, você concorda com nossos{' '}
						<Text style={{ color: currentPage.color, fontWeight: '600' }}>
							Termos de Uso
						</Text>
					</Text>
				)}
			</View>
		</View>
	);
}

// Componente de badge de feature
function FeatureBadge({ icon, text, color }) {
	const { colors } = useTheme();
	return (
		<View
			className="flex-row items-center px-3 py-2 rounded-full"
			style={{
				backgroundColor: `${color}15`,
				borderWidth: 1,
				borderColor: `${color}30`,
			}}
		>
			<Ionicons name={icon} size={14} color={color} />
			<Text
				className="text-xs font-semibold ml-1"
				style={{ color: color }}
			>
				{text}
			</Text>
		</View>
	);
}