interface FeatureFlags {
    [key: string]: boolean;
}

interface AppSettings {
    numberOfDaysToConsider: number;
    consecutiveDays: number;
    isReversed: boolean;
}

const featureFlags: FeatureFlags = {
    tabCalendar: false,
    tabSettings: false,
};

const appSettings: AppSettings = {
    numberOfDaysToConsider: 30,
    consecutiveDays: 1,
    isReversed: false,
}

export { featureFlags, appSettings};
