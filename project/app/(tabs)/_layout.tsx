import { Tabs } from 'expo-router';
import { BriefcaseBusiness, X, Check, User, Settings } from 'lucide-react-native';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TabLayout() {
  const { t } = useLanguage();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          paddingBottom: 8,
          paddingTop: 8,
          height: 80,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter-SemiBold',
          fontSize: 12,
        },
        tabBarActiveTintColor: '#8B4513',
        tabBarInactiveTintColor: '#9ca3af',
      }}>
      <Tabs.Screen
        name="refused"
        options={{
          title: t('tabs.refused'),
          tabBarIcon: ({ size, color, focused }) => (
            <X size={size} color={focused ? '#EF4444' : color} />
          ),
          tabBarActiveTintColor: '#EF4444',
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.jobs'),
          tabBarIcon: ({ size, color }) => (
            <BriefcaseBusiness size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chosen"
        options={{
          title: t('tabs.chosen'),
          tabBarIcon: ({ size, color, focused }) => (
            <Check size={size} color={focused ? '#10B981' : color} />
          ),
          tabBarActiveTintColor: '#10B981',
        }}
      />
    </Tabs>
  );
}