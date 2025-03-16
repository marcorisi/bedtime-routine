import { Bangers_400Regular, useFonts } from '@expo-google-fonts/bangers';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";
import AppSkinService from './src/AppSkinService';
import { getWho } from './src/turnService';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  const [loaded, error] = useFonts({
    Bangers_400Regular
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    const appSkinService = AppSkinService.getInstance();
    appSkinService.setWho(getWho(new Date()));
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
  
}
