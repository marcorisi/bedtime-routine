import { StyleSheet } from "react-native";
import { View } from "react-native";
import { MyAvatar } from "../components/my-avatar";
import { MainTitle } from "../components/main-title";
import AppSkinService from "../src/AppSkinService";
import { AppUserContext } from "../src/AppContext";
import { useContext } from "react";


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

  const { who } = useContext(AppUserContext);
  
  const appSkinService = AppSkinService.getInstance();
  const styles = getStyles(appSkinService.getSkin());

  return (
    <View style={styles.container}>
      <MainTitle who={who}/>
      <MyAvatar who={who}/>
    </View>
  );
}
