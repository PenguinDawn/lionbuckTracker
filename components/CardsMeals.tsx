import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';

type CardMealProps = {
  headingTitle: string,
  num1: any,
  num2: any,
  size: string,
}



const CardMeal = ({headingTitle, num1, num2, size}: CardMealProps) => {
      
      let theme;
      if (useColorScheme() == "dark") {
        theme = Colors.dark;
      }
      else {
        theme = Colors.light;
      }

    let sizing;
    
    if(size === "large") {
      sizing = styles.large;
    }
    else {
      sizing = styles.small;
    }
  

  return (
    <View style={[styles.carded, sizing]}>
      <View style={[styles.maroon]}><Text style={styles.whiteText}>{headingTitle}</Text></View>
      <View style={[styles.flexer, {backgroundColor: theme.background}]}>{num1}{num2}</View>
    </View>
  )
};

export default CardMeal

const styles = StyleSheet.create({
    maroon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "maroon",
        color: 'white',
        fontFamily: 'sans-serif',
        fontWeight: 'semibold',
        padding: 10,
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
    large: {
      width: "70%",
    },
    small: {
      width: "40%",
    },
})