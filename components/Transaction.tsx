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
      <Text style={[{color: theme.color}]}>Date</Text>
      <Text style={[{color: theme.color}]}>Description</Text>
      <Text style={[{color: theme.color}]}>Amount</Text>
    </View>
  )
};

export default Transaction

const styles = StyleSheet.create({
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
    carded: {
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "gray",
      borderRadius: 12,
      width: "75%",
    // border: "1px solid rgba(255, 255, 255, 0.125)",
    },
})