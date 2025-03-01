import { View, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { PastStats } from "../components/past-stats";
import { MarkedDates, getCustomStyle, getValidDatesForTheRoutine } from "../src/calendarTabService";
import { getWho } from "../src/turnService";
import { appSettings } from "../src/config";

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

  const today = new Date();
  const days: Date[] = getValidDatesForTheRoutine(today, appSettings.numberOfDaysToConsider);
  const markedDates: MarkedDates = {};
  
  days.forEach(day => {
    const who = getWho(day);
    const isToday = day.toDateString() === today.toDateString();
    const isInThePast = day < today;
    markedDates[day.toISOString().slice(0, 10)] = {
      customStyles: getCustomStyle(who, isToday, isInThePast)
    }
  });

  return (
    <View style={styles.container}>
      <Calendar 
        markingType={'custom'} 
        markedDates={markedDates} 
      />
      <PastStats daysToConsider={appSettings.numberOfDaysToConsider} momsCount={3} dadsCount={3} />
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
