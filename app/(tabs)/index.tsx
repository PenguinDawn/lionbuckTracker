import { StyleSheet, Text, View } from 'react-native';

import BigNumber from '@/components/BigNum';
import CardMeal from '@/components/CardsMeals';
import SmallNumber from '@/components/SmallNum';
import Header from '../../components/Header';
import Seperator from '../../components/Seperator';

import { Colors } from '@/constants/Colors';

import { useState } from 'react';
import { ScrollView, useColorScheme } from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';

import { useFonts } from "expo-font";
export default function TabOneScreen() {

  // if statements to change the mealplan numbers
  const [fontsLoaded] = useFonts({
    "Tangerine-Reg": require("../../assets/fonts/Tangerine-Regular.ttf"),
    "Archivo-Reg": require("../../assets/fonts/Archivo-Regular.ttf"),
  });

  const mealplan = "A";
  let totalMeals;
  let guestMeals;

  if(mealplan == "A") {
    totalMeals = 14;
    guestMeals = 5;
  }
  else if (mealplan == "B") {
    totalMeals = 10;
    guestMeals = 5;
  }
  else if (mealplan == "U") {
    totalMeals = 19;
    guestMeals = 15;
  }
  else if (mealplan == "C") {
    totalMeals = 80;
    guestMeals = 5;
  }
  else {
    totalMeals = NaN;
    guestMeals = NaN;
  }

  const totalBucks = 150.00;
  const totalChickfila = 2;
  const totalLP = 5;
  const [lionBucks, decreaseBucks] = useState(100.00);
  const [meals, decreaseMeals] = useState(10);
  const [lpMeals, decreaseLPMeals] = useState(5);
  const [chickMeals, decreaseChickMeals] = useState(2);
  const [guestMealsLeft, decreaseGuestMeals] = useState(5);

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
      

      {/* Progress circle bar */}
      <View style={styles.progressHolder}>
        <Text style={[styles.lionTitle, {color: theme.color, fontWeight: "bold"}]}>LionBucks</Text>
        <View style={[styles.middle]}>
          <CircularProgressBase
            value={lionBucks}
            radius={75}
            maxValue={totalBucks}
            duration={800}
            activeStrokeWidth={10}
            activeStrokeColor='maroon'
            >
              <View style={styles.flexer}><BigNumber>${lionBucks}</BigNumber><SmallNumber>${totalBucks}</SmallNumber></View>
          </CircularProgressBase>

        </View>

        {/* insert bar here */}
      </View>
      
      <Seperator />


      <CardMeal size="large" headingTitle="Total Mealswipes" num1={<BigNumber>{meals}</BigNumber>} num2={<SmallNumber>{totalMeals}</SmallNumber>}></CardMeal>

      <View style={styles.twoCards}>
          <CardMeal size="small" headingTitle="LP" num1={<BigNumber>{lpMeals}</BigNumber>} num2={<SmallNumber>{totalLP}</SmallNumber>}></CardMeal>
          <CardMeal size="small" headingTitle="Chick-fil-a" num1={<BigNumber>{chickMeals}</BigNumber>} num2={<SmallNumber>{totalChickfila}</SmallNumber>}></CardMeal>
      </View>

      <Text style={{color: theme.color, fontFamily: "Archivo-Reg, sans-serif", fontSize: 15}}>*Reset on Sunday (2 days)</Text>
      <Seperator />

      <CardMeal size="large" headingTitle="Guest Meals" num1={<BigNumber>{guestMealsLeft}</BigNumber>} num2={<SmallNumber>{guestMeals}</SmallNumber>}></CardMeal>
      <Text style={{color: theme.color, fontFamily: "Archivo-Reg, sans-serif", fontSize: 15}}>*Resets every semester</Text>
      <Seperator />
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
