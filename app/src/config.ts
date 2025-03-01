interface FeatureFlags {
    [key: string]: boolean;
}

interface AppSettings {
    numberOfDaysToConsider: number;
}

const featureFlags: FeatureFlags = {
    tabCalendar: false,
    tabSettings: false,
};

const appSettings: AppSettings = {
    numberOfDaysToConsider: 30
}

export { featureFlags, appSettings };
