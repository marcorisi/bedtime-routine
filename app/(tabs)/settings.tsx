import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import StorageService from "../src/storage";
import AppSkinService from "../src/AppSkinService";
import { Colors } from "../src/colors";
import { Who } from "../src/domain";
import { getWho } from "../src/turnService";
import { appSettings as defaultAppSettings, AppSettings } from "../src/config";

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
    activeButtonSwitchTurn: {
      backgroundColor: skin.backgroundColor,
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
    messageContainer: {
      marginBottom: 16,
      padding: 8,
      backgroundColor: 'black',
      borderRadius: 4,
    },
    messageText: {
      color: 'white',
      fontFamily: 'Bangers_400Regular',
      fontSize: 14,
    },
  });
}

export default function Settings() {
  const appSkinService = AppSkinService.getInstance();

  const [appSettings, setAppSettings] = useState<AppSettings>(defaultAppSettings);
  const [numberOfDaysToConsider, setNumberOfDaysToConsider] = useState(defaultAppSettings.numberOfDaysToConsider);
  const [consecutiveDays, setConsecutiveDays] = useState(defaultAppSettings.consecutiveDays);
  const [isReversed, setIsReversed] = useState(defaultAppSettings.isReversed);
  const [isMomTurn, setIsMomTurn] = useState(true);
  const [message, setMessage] = useState("");
  const storageService = StorageService.getInstance();
  const styles = getStyles(appSkinService.getSkin());

  const init = () => {
    storageService.getConfig().then((appSettings) => {
      setAppSettings(appSettings);
      const daysValue = appSettings.numberOfDaysToConsider || 30;
      const validDays = Math.min(Math.max(daysValue, 30), 60);
      setNumberOfDaysToConsider(validDays);
      setConsecutiveDays(appSettings.consecutiveDays);
      setIsReversed(appSettings.isReversed);

      if (appSkinService.getWho() === Who.MOM) {
        setIsMomTurn(true);
      } else {
        setIsMomTurn(false);
      }
    });
  };

  const updateTodaysTurn = (who: Who) => {
    const todaysTurn = getWho(new Date(), appSettings.isReversed, appSettings.consecutiveDays);
    setIsMomTurn(who === Who.MOM);
    setIsReversed(appSettings.isReversed ? todaysTurn === who : todaysTurn !== who);
    appSkinService.setWho(who);
  };

  const handleSave = () => {
    let message = "";
    const daysValue = numberOfDaysToConsider;
    const consecutiveDaysValue = consecutiveDays;
    
    if (isNaN(daysValue) || daysValue < 30 || daysValue > 60) {
      message += "I giorni di calendario devono essere compresi tra 30 e 60. ";
    }

    if (isNaN(consecutiveDaysValue) || consecutiveDaysValue < 1 || consecutiveDays > 5) {
      message += "I giorni consecutivi devono essere compresi tra 1 e 5. ";
    }

    if (message) {
      setMessage(message);
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setMessage("");
    const appSettings = {
      numberOfDaysToConsider: daysValue,
      consecutiveDays: consecutiveDays,
      isReversed: isReversed,
    };
    storageService.saveConfig(appSettings);

    message = "Impostazioni salvate!";
    setMessage(message);
    setTimeout(() => setMessage(""), 1000);
    return;
  };

  const validateDaysInput = (text: string) => {
    const value = text.replace(/[^0-9]/g, '');
    setNumberOfDaysToConsider(parseInt(value));
  };

  const validateConsecutiveDaysInput = (text: string) => {
    const value = text.replace(/[^0-9]/g, '');
    setConsecutiveDays(parseInt(value));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {message ? (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{message}</Text>
          </View>
        ) : null}
        <Text style={styles.label}>Giorni nel calendario (30-60):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={numberOfDaysToConsider.toString()}
          onChangeText={validateDaysInput}
          maxLength={2}
        />
        <Text style={styles.label}>Giorni consecutivi (1-5):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={consecutiveDays.toString()}
          maxLength={2}
          onChangeText={validateConsecutiveDaysInput}
        />
        <Text style={styles.label}>Oggi tocca a...</Text>
        <View style={styles.switchContainer}>
          <Pressable style={[ styles.buttonSwitchTurn, styles.buttonLeftSwitchTurn, isMomTurn ? styles.activeButtonSwitchTurn: '' ]} onPress={() => updateTodaysTurn(Who.MOM)}>
            <Text style={[styles.buttonText]}>Mamma</Text>
          </Pressable>
          <Pressable style={[ styles.buttonSwitchTurn, styles.buttonRightSwitchTurn, !isMomTurn ? styles.activeButtonSwitchTurn: '']} onPress={() => updateTodaysTurn(Who.DAD)}>
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
