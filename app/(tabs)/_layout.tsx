import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Colors } from '../src/colors';
import featureFlags from '../src/config';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarActiveTintColor: Colors.primaryTextColor,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={Colors.primaryTextColor} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          href: featureFlags.tabCalendar ? '/calendar' : null,
          tabBarActiveTintColor: Colors.primaryTextColor,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={Colors.primaryTextColor} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          href: featureFlags.tabSettings ? '/settings' : null,
          tabBarActiveTintColor: Colors.primaryTextColor,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={Colors.primaryTextColor} />,
        }}
      />
    </Tabs>
  );
}
