import { StyleSheet, Text, View } from 'react-native';

import BigNumber from '@/components/BigNum';
import CardMeal from '@/components/CardsMeals';
import SmallNumber from '@/components/SmallNum';
import ThemedSchedule from '@/components/ThemedSchedule';
import Seperator from '../../components/Seperator';
 
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { ScrollView, useColorScheme } from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
export default function TabOneScreen() {

  // if statements to change the mealplan numbers

  const totalBucks = 150.00;
  const totalMeals = 14;
  const totalChickfila = 2;
  const totalLP = 5;
  const [lionBucks, decreaseBucks] = useState(100.00);
  const [meals, decreaseMeals] = useState(10);
  const [lpMeals, decreaseLPMeals] = useState(5);
  const [chickMeals, decreaseChickMeals] = useState(2);

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
      

      {/* Progress circle bar */}
      <View style={styles.progressHolder}>
        <Text style={[styles.lionTitle, {color: theme.color}]}>LionBucks</Text>
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


      <CardMeal size="large" headingTitle="Total Mealswipes Left" num1={<BigNumber>{meals}</BigNumber>} num2={<SmallNumber>{totalMeals}</SmallNumber>}></CardMeal>

      <View style={styles.twoCards}>
          <CardMeal size="small" headingTitle="LP Swipes" num1={<BigNumber>{lpMeals}</BigNumber>} num2={<SmallNumber>{totalLP}</SmallNumber>}></CardMeal>
          <CardMeal size="small" headingTitle="Chickfila Swipes" num1={<BigNumber>{chickMeals}</BigNumber>} num2={<SmallNumber>{totalChickfila}</SmallNumber>}></CardMeal>
      </View>

      <Seperator />

      {/* create reset function */}
      <ThemedSchedule>Resets on Sunday (<Text style={styles.textUnderline}>2 days</Text>)</ThemedSchedule>
      {/* create a "database" for mealplan names and totals*/}
      <ThemedSchedule>Meal Plan A (<Text style={styles.textUnderline}>{totalMeals} meals</Text>)</ThemedSchedule>

      <Seperator />

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lionTitle: {
    fontFamily: "script",
    fontSize: 24,
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
