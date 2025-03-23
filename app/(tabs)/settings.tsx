import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import StorageService from "../src/storage";
import AppSkinService from "../src/AppSkinService";
import { Colors } from "../src/colors";

const getStyles = (skin: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: skin.backgroundLightColor,
    },
    formContainer: {
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: 24,
      borderRadius: 8,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    },
    label: {
      fontFamily: 'Bangers_400Regular',
      fontSize: 16,
      marginBottom: 8,
    },
    input: {
      fontFamily: 'Bangers_400Regular',
      fontSize: 16,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 24,
      paddingHorizontal: 16,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: skin.primaryTextColor,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 24,
    },
    buttonText: {
      fontFamily: 'Bangers_400Regular',
      fontSize: 16,
    },
    buttonSwitchTurn: {
      padding: 16,
      alignItems: 'center',
      borderColor: Colors.secondaryTextColor,
      borderWidth: 1,
      width: '50%',
    },
    buttonLeftSwitchTurn: {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    buttonRightSwitchTurn: {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    whiteColor: {
      color: 'white',
    },
  });
}

export default function Settings() {
  const [numberOfDaysToConsider, setNumberOfDaysToConsider] = useState("30");
  const [consecutiveDays, setConsecutiveDays] = useState("1");
  const [isReversed, setIsReversed] = useState(false);
  const storageService = StorageService.getInstance();
  const styles = getStyles(AppSkinService.getInstance().getSkin());

  const init = () => {
    storageService.getConfig().then((appSettings) => {
      setNumberOfDaysToConsider(appSettings.numberOfDaysToConsider.toString());
      setConsecutiveDays(appSettings.consecutiveDays.toString());
      setIsReversed(appSettings.isReversed);
    });
  };

  const handleSave = () => {
    // Add your save logic here
    const appSettings = {
      numberOfDaysToConsider: parseInt(numberOfDaysToConsider),
      consecutiveDays: parseInt(consecutiveDays),
      isReversed: isReversed,
    };
    storageService.saveConfig(appSettings);
    console.log("Settings saved");
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Giorni nel calendario:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={numberOfDaysToConsider}
          onChangeText={setNumberOfDaysToConsider}
        />
        <Text style={styles.label}>Giorni consecutivi:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={consecutiveDays}
          onChangeText={setConsecutiveDays}
        />
        <Text style={styles.label}>Oggi tocca a...</Text>
        <View style={styles.switchContainer}>
          <Pressable style={[styles.buttonSwitchTurn, styles.buttonLeftSwitchTurn]} onPress={() => setIsReversed(!isReversed)}>
            <Text style={[styles.buttonText]}>Mamma</Text>
          </Pressable>
          <Pressable style={[styles.buttonSwitchTurn, styles.buttonRightSwitchTurn]} onPress={() => setIsReversed(!isReversed)}>
            <Text style={[styles.buttonText]}>Papà</Text>
          </Pressable>
        </View>
        <Pressable style={styles.button} onPress={handleSave}>
          <Text style={[styles.buttonText, styles.whiteColor]}>Salva</Text>
        </Pressable>
      </View>
    </View>
  );
}
