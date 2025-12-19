import React from 'react';
import { View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts';
import { Header } from '../components';

import { DiscoverScreen } from '../screens/discover';
import { ToursScreen } from '../screens/tours';
import { TransportScreen } from '../screens/transport';
import { BookingsScreen } from '../screens/bookings';
import { MenuScreen } from '../screens/menu';

const Tab = createBottomTabNavigator();

const tabConfig = {
	discover: {
		name: 'Discover',
		label: 'Descobrir',
		iconFocused: 'compass',
		iconUnfocused: 'compass-outline',
	},
	tours: {
		name: 'Tours',
		label: 'Passeios',
		iconFocused: 'boat',
		iconUnfocused: 'boat-outline',
	},
	transport: {
		name: 'Transport',
		label: 'Transporte',
		iconFocused: 'car',
		iconUnfocused: 'car-outline',
	},
	bookings: {
		name: 'Bookings',
		label: 'Reservas',
		iconFocused: 'calendar',
		iconUnfocused: 'calendar-outline',
	},
	menu: {
		name: 'Menu',
		label: 'Menu',
		iconFocused: 'grid',
		iconUnfocused: 'grid-outline',
	},
};

function ScreenWrapper({ children }) {
	const { colors } = useTheme();

	return (
		<View className="flex-1" style={{ backgroundColor: colors.background.primary }}>
			<Header />
			{children}
		</View>
	);
}

function TabBarIcon({ focused, color, size, iconName }) {
	return (
		<View 
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				width: 50,
				height: 32,
				borderRadius: 16,
				backgroundColor: focused ? `${color}15` : 'transparent',
			}}
		>
			<Ionicons 
				name={iconName} 
				size={focused ? size + 2 : size} 
				color={color} 
			/>
		</View>
	);
}

export default function TabNavigator() {
	const { colors } = useTheme();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					const config = tabConfig[route.name.toLowerCase()];
					const iconName = focused ? config.iconFocused : config.iconUnfocused;
					return (
						<TabBarIcon 
							focused={focused}
							color={color}
							size={size}
							iconName={iconName}
						/>
					);
				},
				tabBarActiveTintColor: colors.primary.vivid,
				tabBarInactiveTintColor: colors.text.muted,
				tabBarStyle: {
					backgroundColor: colors.surface.card,
					borderTopColor: 'transparent',
					borderTopWidth: 0,
					paddingTop: 12,
					paddingBottom: Platform.OS === 'ios' ? 20 : 12,
					height: Platform.OS === 'ios' ? 85 : 70,
					elevation: 0,
					shadowColor: '#000',
					shadowOffset: { width: 0, height: -2 },
					shadowOpacity: 0.1,
					shadowRadius: 8,
				},
				tabBarLabelStyle: {
					fontSize: 11,
					fontWeight: '600',
					marginTop: 4,
					marginBottom: 2,
				},
				tabBarItemStyle: {
					paddingTop: 4,
				},
			})}
		>
			<Tab.Screen 
				name="Discover" 
				options={{ tabBarLabel: tabConfig.discover.label }}
			>
				{() => (
					<ScreenWrapper>
						<DiscoverScreen />
					</ScreenWrapper>
				)}
			</Tab.Screen>
			
			<Tab.Screen 
				name="Tours" 
				options={{ tabBarLabel: tabConfig.tours.label }}
			>
				{() => (
					<ScreenWrapper>
						<ToursScreen />
					</ScreenWrapper>
				)}
			</Tab.Screen>
			
			<Tab.Screen 
				name="Transport" 
				options={{ tabBarLabel: tabConfig.transport.label }}
			>
				{() => (
					<ScreenWrapper>
						<TransportScreen />
					</ScreenWrapper>
				)}
			</Tab.Screen>
			
			<Tab.Screen 
				name="Bookings" 
				options={{ tabBarLabel: tabConfig.bookings.label }}
			>
				{() => (
					<ScreenWrapper>
						<BookingsScreen />
					</ScreenWrapper>
				)}
			</Tab.Screen>
			
			<Tab.Screen 
				name="Menu" 
				options={{ tabBarLabel: tabConfig.menu.label }}
			>
				{() => (
					<ScreenWrapper>
						<MenuScreen />
					</ScreenWrapper>
				)}
			</Tab.Screen>
		</Tab.Navigator>
	);
}