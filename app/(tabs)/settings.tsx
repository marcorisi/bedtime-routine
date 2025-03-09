import { useState } from "react";
import { View, Text, TextInput, Switch, StyleSheet, Button, Pressable } from "react-native";
import { Colors } from "../src/colors";

export default function Settings() {
  const [numberOfDaysToConsider, setNumberOfDaysToConsider] = useState("30");
  const [consecutiveDays, setConsecutiveDays] = useState("1");
  const [isReversed, setIsReversed] = useState(false);

  const handleSave = () => {
    // Add your save logic here
    console.log("Settings saved");
  };

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
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Inverti ordine genitori?</Text>
          <Switch
            value={isReversed}
            onValueChange={setIsReversed}
          />
        </View>
        <Pressable style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salva</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.backgroundLightBlue,
  },
  formContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
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
    backgroundColor: Colors.backgroundBlue,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    fontFamily: 'Bangers_400Regular',
    fontSize: 16,
    color: 'white',
  },
});
