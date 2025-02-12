import { Text, StyleSheet } from "react-native";
import { Who } from "../src/domain";

export function MainTitle({ who }: { who: Who }) {
    
    return (
        <>
            <Text style={styles.customFont}>Oggi tocca a...</Text>
            <Text style={[styles.customFont, styles.title]}>
                {who}!
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    customFont: {
        fontFamily: 'Bangers_400Regular',
        fontSize: 24,
    },
    title: {
        fontSize: 48,
        letterSpacing: 4,
    },
});
