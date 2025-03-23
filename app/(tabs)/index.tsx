import { StyleSheet } from "react-native";
import { View } from "react-native";
import { getWho } from "../src/turnService";
import { Who } from "../src/domain";
import { MyAvatar } from "../components/my-avatar";
import { MainTitle } from "../components/main-title";
import AppSkinService from "../src/AppSkinService";


const getStyles = (skin: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: skin.backgroundColor,
    }
  });
}

export default function Index() {
  
  const who: Who = getWho(new Date());
  const styles = getStyles(AppSkinService.getInstance().getSkin());

  return (
    <View style={styles.container}>
      <MainTitle who={who}/>
      <MyAvatar who={who}/>
    </View>
  );
}
