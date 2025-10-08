

import { StyleSheet, Text, View } from 'react-native';


import Header from '../../components/Header';
import Seperator from '../../components/Seperator';

import { Colors } from '@/constants/Colors';

import { useColorScheme } from 'react-native';

import Transaction from '@/components/Transaction';
import { useFonts } from "expo-font";
import { ScrollView } from 'react-native';

export default function TabTwoScreen() {
   const [fontsLoaded] = useFonts({
      "Tangerine-Reg": require("../../assets/fonts/Tangerine-Regular.ttf"),
      "Archivo-Reg": require("../../assets/fonts/Archivo-Regular.ttf"),
    });

    let theme;
        if (useColorScheme() == "dark") {
          theme = Colors.dark;
        }
        else {
          theme = Colors.light;
        }

  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Text style={[styles.lionTitle, {color: theme.color, fontWeight: "bold"}]}>History</Text>
        <Seperator />
        <Transaction headingTitle='hi' purchase='hi' price={10} newBalance={100} />
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lionTitle: {
    fontFamily: "Tangerine-Reg",
    fontSize: 36,
  },
  progressHolder: {
    flexDirection: "column",
    width: "65%",
    alignItems: "center",
  },
  middle: {
    marginInline: "auto",
  },
  width65: {
    width: "65%",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  twoCards: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly",
    marginInline: "auto",
  },
  flexer: {
      flexDirection: "row",
      justifyContent: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      padding: 5,
      paddingTop: 10,
      paddingBottom: 10,
    },

});
