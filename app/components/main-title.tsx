import { Text } from "react-native";
import { Who } from "../src/domain";

export function MainTitle({ who }: { who: Who }) {
    
    return (
        <>
            <Text>Oggi tocca ...</Text>
            <Text>{who}!</Text>
        </>
    )
}
