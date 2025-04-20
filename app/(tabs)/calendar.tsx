import { View, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { MarkedDates, getCustomStyle, getValidDatesForTheRoutine } from "@/src/calendarTabService";
import { useState } from "react";
import { getWho } from "@/src/turnService";
import { appSettings } from "@/src/config";
import AppSkinService from "@/src/AppSkinService";
import StorageService from "@/src/storage";

const getStyles = (skin: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: skin.backgroundLightColor,
      padding: 24,
    },
    calendar: {
      borderRadius: 8,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    }
  })
}

export default function CalendarTab() {

  const [numberOfDaysToConsider, setNumberOfDaysToConsider] = useState(appSettings.numberOfDaysToConsider);
  const [consecutiveDays, setConsecutiveDays] = useState(appSettings.consecutiveDays);
  const [isReversed, setIsReversed] = useState(appSettings.isReversed);
  const styles = getStyles(AppSkinService.getInstance().getSkin());

  StorageService.getInstance().getConfig().then((appSettings) => {
    setNumberOfDaysToConsider(appSettings.numberOfDaysToConsider);
    setIsReversed(appSettings.isReversed);
    setConsecutiveDays(appSettings.consecutiveDays);
  });

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
  const days: Date[] = getValidDatesForTheRoutine(today, numberOfDaysToConsider);
  const markedDates: MarkedDates = {};
  
  days.forEach(day => {
    const who = getWho(day, isReversed, consecutiveDays);
    const isToday = day.toDateString() === today.toDateString();
    const isInTheFuture = day > today;
    markedDates[day.toISOString().slice(0, 10)] = {
      customStyles: getCustomStyle(who, isToday, isInTheFuture)
    }
  });

  return (
    <View style={styles.container}>
      <Calendar style={styles.calendar}
        markingType={'custom'} 
        markedDates={markedDates} 
        theme={{
          textMonthFontFamily: 'Bangers_400Regular',
          textDayHeaderFontFamily: 'Bangers_400Regular',
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
}
