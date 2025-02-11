import { Text } from "react-native";
import { Who } from "../src/domain";

export function MainTitle({ who }: { who: Who }) {

    const message = `Oggi tocca a... ${who}!`;
    
    return (
        <>
            <Text>{message}</Text>
        </>
    )
}
