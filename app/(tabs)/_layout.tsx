import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { featureFlags } from '@/src/config';
import AppSkinService from '@/src/AppSkinService';
import { useState } from 'react';

export default function TabLayout() {

  const appSkinService = AppSkinService.getInstance();
  const [color, setColor] = useState(appSkinService.getSkin().primaryTextColor);

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: color, headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          href: featureFlags.tabCalendar ? '/calendar' : null,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          href: featureFlags.tabSettings ? '/settings' : null,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
