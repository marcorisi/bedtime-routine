import { Bangers_400Regular, useFonts } from '@expo-google-fonts/bangers';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";
import AppSkinService from './src/AppSkinService';
import StorageService from './src/storage';
import { getWho } from './src/turnService';
import { Who } from './src/domain';

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
    const storageService = StorageService.getInstance();
    storageService.getConfig().then((appSettings) => {
      const appSkinService = AppSkinService.getInstance();
      const who = getWho(new Date(), appSettings.isReversed, appSettings.consecutiveDays);
      appSkinService.setWho(who);
    });
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
