import { View } from "react-native";
import { getWho } from "./src/turnService";
import { Who } from "./src/domain";
import { MyAvatar } from "./components/my-avatar";
import { MainTitle } from "./components/main-title";

export default function Index() {
  const who: Who = getWho(new Date());

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainTitle who={who}/>
      <MyAvatar who={who}/>
    </View>
  );
}
