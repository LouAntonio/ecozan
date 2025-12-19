import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts';

export default function Header({ 
	showNotifications = true,
	showProfile = true,
	notificationCount = 0,
	onNotificationPress,
	onProfilePress,
	userName
}) {
	const { colors } = useTheme();
	const insets = useSafeAreaInsets();

	return (
		<View 
			className="w-full px-4 pb-3"
			style={{ 
				paddingTop: insets.top + 12,
				backgroundColor: colors.background.primary,
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.05,
				shadowRadius: 8,
				elevation: 3,
			}}
		>
			<View className="flex-row items-center justify-between">
				{/* Logo */}
				<View className="flex-1 items-center">
					<Image
						source={require('../../assets/logoCroppedBG.png')}
						className="h-10 w-[120px]"
						resizeMode="contain"
					/>
				</View>

				{/* Actions */}
				{(showNotifications || showProfile) && (
					<View className="flex-row items-center gap-2 absolute right-0">
						{showNotifications && (
							<TouchableOpacity 
								onPress={onNotificationPress}
								className="w-10 h-10 items-center justify-center rounded-full active:opacity-70"
								style={{ backgroundColor: `${colors.primary.vivid}10` }}
							>
								<Ionicons 
									name="notifications-outline" 
									size={22} 
									color={colors.text.primary} 
								/>
								{notificationCount > 0 && (
									<View 
										className="absolute -top-1 -right-1 w-5 h-5 rounded-full items-center justify-center"
										style={{ backgroundColor: colors.accent?.error || '#EF4444' }}
									>
										<Text className="text-white text-xs font-bold">
											{notificationCount > 9 ? '9+' : notificationCount}
										</Text>
									</View>
								)}
							</TouchableOpacity>
						)}

						{showProfile && (
							<TouchableOpacity 
								onPress={onProfilePress}
								className="w-10 h-10 items-center justify-center rounded-full active:opacity-70"
								style={{ backgroundColor: `${colors.primary.vivid}10` }}
							>
								{userName ? (
									<View 
										className="w-full h-full rounded-full items-center justify-center"
										style={{ backgroundColor: colors.primary.vivid }}
									>
										<Text className="text-white text-sm font-bold">
											{userName.charAt(0).toUpperCase()}
										</Text>
									</View>
								) : (
									<Ionicons 
										name="person-circle-outline" 
										size={24} 
										color={colors.text.primary} 
									/>
								)}
							</TouchableOpacity>
						)}
					</View>
				)}
			</View>
		</View>
	);
}