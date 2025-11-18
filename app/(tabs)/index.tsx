import { useFonts } from "expo-font";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
// components
import BigNumber from '@/components/BigNum';
import CardMeal from '@/components/CardsMeals';
import SmallNumber from '@/components/SmallNum';
import { Colors } from '@/constants/Colors';
import { useState } from "react";
import Header from '../../components/Header';
import Seperator from '../../components/Seperator';


export default function HomeScreen() {
  const totalChickfila = 2; // needs some logic to figure out the meal swipes
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const diningDollars = "10";
    const lionBucks = 10;
    const mealSwipes = 10;
    const guestSwipes = 5;
    const mealInfo = {
      name: "Meal Plan A",
      totalMeals: 10,
      totalDiningDollars: 170,
      totalGuestSwipes: 5}


  // const {
  //   diningDollars,
  //   lionBucks,
  //   mealSwipes,
  //   guestSwipes,
  //   transactions,
  //   isLoading,
  //   error,
  //   mealInfo,
  //   fetchMealData,
  // } = useMealSwipeData();

  

  const [reset, setReset] = useState("");
  const [daysTilReset, setDaysTilReset] = useState(5);
  // if (mealInfo?.name == "Meal Plan C") {
  //   setReset("end of semester")
  // }
  // else {
  //   setReset("Sunday")
  //   let date = new Date();
  //   let day = date.getDay();
  //   setDaysTilReset(7 - day)
  // }


  // const handleGetHtml = async () => {
  //   try {
  //     await fetchMealData(username, password);
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // };

  const [fontsLoaded] = useFonts({
    "Tangerine-Reg": require("../../assets/fonts/Tangerine-Regular.ttf"),
    "Archivo-Reg": require("../../assets/fonts/Archivo-Regular.ttf"),
  });

  const mealplan = "A";

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
          <Text style={[styles.lionTitle, { color: theme.color, fontWeight: "bold" }]}>LionBucks</Text>
          <View style={[styles.middle]}>
            <CircularProgressBase
              value={parseInt(diningDollars)}
              radius={75}
              maxValue={mealInfo?.totalDiningDollars}
              duration={800}
              activeStrokeWidth={10}
              activeStrokeColor='maroon'
              circleBackgroundColor="#363535ff"
            >
              <View style={styles.flexer}><Text style={[styles.insideText, {color: theme.color}]}>${diningDollars}</Text></View>
            </CircularProgressBase>

          </View>

          {/* insert bar here */}
        </View>

        <Seperator />


        <CardMeal size="large" headingTitle="Total Mealswipes" num1={<BigNumber>{mealSwipes}</BigNumber>} num2={<SmallNumber>{mealInfo?.totalMeals}</SmallNumber>}></CardMeal>

        <View style={styles.twoCards}>
          <CardMeal size="small" headingTitle="LP" num1={<BigNumber>number here</BigNumber>} num2={<SmallNumber>{5}</SmallNumber>}></CardMeal>
          <CardMeal size="small" headingTitle="Chick-fil-a" num1={<BigNumber>number here</BigNumber>} num2={<SmallNumber>2</SmallNumber>}></CardMeal>
        </View>

        <Text style={{ color: theme.color, fontFamily: "Archivo-Reg, sans-serif", fontSize: 15 }}>*Reset is {reset} 
          {reset !== "end of semester" &&
          <Text style={{ color: theme.color, fontFamily: "Archivo-Reg, sans-serif", fontSize: 15 }}>in {daysTilReset} days </Text>
          }
          </Text>
        <Seperator />

        <CardMeal size="large" headingTitle="Guest Meals" num1={<BigNumber>{guestSwipes}</BigNumber>} num2={<SmallNumber>{mealInfo?.totalGuestSwipes}</SmallNumber>}></CardMeal>
        <Text style={{ color: theme.color, fontFamily: "Archivo-Reg, sans-serif", fontSize: 15 }}>*Resets every semester</Text>
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
    insideText: {
    fontSize: 30,
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
