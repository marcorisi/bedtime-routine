import { StyleSheet } from "react-native";
import { View } from "react-native";
import MyAvatar from "../components/my-avatar";
import MainTitle from "../components/main-title";
import AppSkinService from "@/src/AppSkinService";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

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

  const appSkin = AppSkinService.getInstance();

  const [styles, setStyles] = useState(getStyles(appSkin.getSkin()));
  const [who, setWho] = useState(appSkin.getWho());

  useFocusEffect(
    useCallback(() => {
      setStyles(getStyles(appSkin.getSkin()));  // Fixed: use getSkin instead of getWho
      setWho(appSkin.getWho());

      return () => {};
    }, [])  // Empty dependency array means this only runs on mount and focus
  );

  return (
    <View style={styles.container}>
      <MainTitle who={who}/>
      <MyAvatar who={who}/>
    </View>
  );
}
