import { Text, StyleSheet } from "react-native";
import { Who } from "../src/domain";
import { Colors } from "../src/colors";

export function MainTitle({ who }: { who: Who }) {
    
    return (
        <>
            <Text style={[
                styles.customFont,
                who === Who.MOM ? styles.mommyStyle : styles.daddyStyle
            ]}>
                Oggi tocca a...
            </Text>
            <Text style={[
                styles.customFont, 
                styles.title,
                who === Who.MOM ? styles.mommyStyle : styles.daddyStyle
            ]}>
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
        marginBottom: 24,
    },
    mommyStyle: {
        color: Colors.pink,
    }, 
    daddyStyle: {
        color: Colors.blue,
    }
});
