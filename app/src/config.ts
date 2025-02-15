interface FeatureFlags {
    [key: string]: boolean;
}

const featureFlags: FeatureFlags = {
    tabCalendar: false,
    tabSettings: false,
};

export default featureFlags;
