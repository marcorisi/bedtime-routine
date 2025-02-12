import { StyleSheet } from "react-native";
import { View } from "react-native";
import { getWho } from "./src/turnService";
import { Who } from "./src/domain";
import { MyAvatar } from "./components/my-avatar";
import { MainTitle } from "./components/main-title";
import { Colors } from "./src/colors";

export default function Index() {
  
  const who: Who = getWho(new Date());

  return (
    <View
      style={[
        styles.container,
        who === Who.MOM ? styles.mommyStyle : styles.daddyStyle,
      ]}
    >
      <MainTitle who={who}/>
      <MyAvatar who={who}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mommyStyle: {
    backgroundColor: Colors.lightPink,
  },
  daddyStyle: {
    backgroundColor: Colors.lightBlue,
  },
});
