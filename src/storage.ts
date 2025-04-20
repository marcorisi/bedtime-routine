import AsyncStorage from '@react-native-async-storage/async-storage';

import { appSettings, AppSettings } from './config';

class StorageService {
    private static instance: StorageService;
    private readonly configKey = 'appSettings';

    private constructor() {}

    public static getInstance(): StorageService {
        if (!StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }

    public async saveConfig(config: AppSettings): Promise<void> {
        try {
            const jsonValue = JSON.stringify(config);
            await AsyncStorage.setItem(this.configKey, jsonValue);
        } catch (e) {
            console.error('Failed to save config', e);
        }
    }

    public async getConfig(): Promise<AppSettings> {
        try {
            const jsonValue = await AsyncStorage.getItem(this.configKey);
            return jsonValue != null ? JSON.parse(jsonValue) : appSettings;
        } catch (e) {
            console.error('Failed to load config', e);
            return appSettings;
        }
    }
}

export default StorageService;
