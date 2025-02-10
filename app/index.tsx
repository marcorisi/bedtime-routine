import { Text, View } from "react-native";
import { getTurnMessage, getWho } from "./src/turnService";
import { Who } from "./src/domain";
import { MyAvatar } from "./components/my-avatar";

export default function Index() {
  const who: Who = getWho(new Date());
  const message = getTurnMessage(who);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{message}</Text>
      <MyAvatar who={who}/>
    </View>
  );
}
