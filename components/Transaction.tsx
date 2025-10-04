import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';

type CardMealProps = {
  headingTitle: string,
  purchase: string,
  price: any,
  newBalance: any,
}

import { useFonts } from 'expo-font';
const Transaction = ({headingTitle, purchase, price, newBalance}: CardMealProps) => {
    const [fontsLoaded] = useFonts({
    "Archivo-Reg": require("../assets/fonts/Archivo-Regular.ttf"),
  });
      
      let theme;
      if (useColorScheme() == "dark") {
        theme = Colors.dark;
      }
      else {
        theme = Colors.light;
      }
  

  return (
    <View style={[styles.carded]}>
      <View style={[styles.maroon]}><Text style={styles.whiteText}>{headingTitle}</Text></View>
      <View style={[styles.flexer, {backgroundColor: theme.background}]}></View>
    </View>
  )
};

export default Transaction

const styles = StyleSheet.create({
    maroon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "linear-gradient(to right bottom, #901431, #87112c, #7e0d28, #750923, #6c061f, #64051d, #5d051c, #55041a, #4b051a, #420719, #380818, #2f0816)",
        color: 'white',
        fontFamily: 'sans-serif',
        fontWeight: 'semibold',
        padding: 10,
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: "65%",
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
    whiteText: {
      color: "white",
      fontSize: 16,
      fontFamily: "Archivo-Reg, sans-serif"
    },
    smaller: {
      marginTop: 20,
    },
    carded: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 12,
    // border: "1px solid rgba(255, 255, 255, 0.125)",
    },
})