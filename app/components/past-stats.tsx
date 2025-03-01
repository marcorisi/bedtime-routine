import { Text, StyleSheet, View } from "react-native";

export function PastStats( { daysToConsider, momsCount, dadsCount } : { daysToConsider: number, momsCount: number, dadsCount: number }) {
    
    return (
        <View>
            <Text>
                Negli ultimi {daysToConsider} giorni hai dormito:
            </Text>
            <Text>
                * {momsCount} volte con la mamma
            </Text>
            <Text>
                * {dadsCount} volte con il papà
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
});
