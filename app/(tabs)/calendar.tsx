import { View, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { MarkedDates, getCustomStyle, getDaysInMonth } from "../src/calendarTabService";
import { getWho } from "../src/turnService";

export default function CalendarTab() {

  LocaleConfig.locales['it'] = {
    monthNames: [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre'
    ],
    monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    dayNames: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    today: "Oggi"
  };
  LocaleConfig.defaultLocale = 'it';

  const days: Date[] = getDaysInMonth(1, 2025);
  const markedDates: MarkedDates = {};
  
  days.forEach(day => {
    const who = getWho(day);
    markedDates[day.toISOString().slice(0, 10)] = {
      customStyles: getCustomStyle(who)
    }
  });

  return (
    <View style={styles.container}>
      <Calendar 
        markingType={'custom'} 
        markedDates={markedDates} 
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
})
