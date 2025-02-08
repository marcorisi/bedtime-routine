import { Text, View } from "react-native";
import { getTurnMessage } from "./src/turnService";

export default function Index() {
  const message = getTurnMessage(new Date());

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
