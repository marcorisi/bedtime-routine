import { Text, View } from "react-native";
import { getTurn } from "./src/turnService";

export default function Index() {
  const message = getTurn(new Date());

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{message}</Text>
    </View>
  );
}
