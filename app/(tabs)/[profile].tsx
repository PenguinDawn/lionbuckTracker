import { Colors } from '@/constants/Colors';
import { Linking, Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';

import Header from '@/components/Header';
import Seperator from '@/components/Seperator';
import { clearLogin, loadLogin } from '@/hooks/use-auth';
import { useMealSwipeData } from '@/hooks/use-meal-swipe-data';
import { useFonts } from "expo-font";
import { useEffect, useState } from 'react';


export default function ProfileScreen() {
  // if statements to change the mealplan numbers
  const [fontsLoaded] = useFonts({
    "Tangerine-Reg": require("../../assets/fonts/Tangerine-Regular.ttf"),
    "Archivo-Reg": require("../../assets/fonts/Archivo-Regular.ttf"),
  });

  const mailtoUrl = `mailto:ttenon@fhu.edu`;

  const openEmail = async () => {
    try {
      const supported = await Linking.canOpenURL(mailtoUrl);
      if (supported) {
        await Linking.openURL(mailtoUrl);
      } else {
        console.log("Can't handle mailto URL on this device.");
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  const {
    lionBucks,
    mealInfo,
    fetchMealData,
  } = useMealSwipeData();


  const handleGetHtml = async () => {
    try {
      await fetchMealData(username, password);
    }
    catch (err) {
      console.log(err)
    }
  };

  const [username, setUsername] = useState("Carlos2004");
  const [password, setPassword] = useState("password");
  const [mealplan, setMealplan] = useState<string | undefined>();
  const [meals, setMeals] = useState<number | undefined>(14);
  const [reset, setReset] = useState("week");

  setMeals(mealInfo?.totalMeals);
  setMealplan(mealInfo?.name);

  const [showing, setShowing] = useState(false);

  if (mealInfo?.name == "Meal Plan C") {
    setReset("at end of semester")
  }
  else {
    setReset("on Sunday")
  }

  let theme;
  if (useColorScheme() == "dark") {
    theme = Colors.dark;
  }
  else {
    theme = Colors.light;
  }

  useEffect(() => {
    (async () => {
      const saved = await loadLogin();
      if (saved.username) setUsername(saved.username);
      if (saved.password) setPassword(saved.password);
    })();
  }, []);





  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.textHolder}>
        {/* name */}
        <Text style={[styles.title, { color: theme.color }]}>Welcome {username}</Text>
        {/* username */}
        <Text style={[styles.listingStyle, { color: theme.color }]}>Username: {username}</Text>
        {/* password */}
        <View style={styles.passwordContainer}>
          <Text style={[styles.listingStyle, { color: theme.color }]}>Password:

            {showing && (
              <Text style={{ color: theme.color }}> {password}</Text>
            )}
          </Text>
          {/* show password */}

          <Pressable onPress={() => { setShowing(!showing) }} style={[styles.showButton]}>Show</Pressable>

          {/* make the conditional showing */}
        </View>
      </View>


      <Seperator />

      <View style={styles.textHolder}>
        {/* meal plan */}
        <Text style={[styles.listingStyle, { color: theme.color }]}>{mealplan} ({meals} meals, resets {reset})</Text>
        {/* dining dollars given */}
        <Text style={[styles.listingStyle, { color: theme.color }]}>${lionBucks} per semester</Text>
        <Pressable onPress={openEmail}><Text style={[styles.listingStyle, { color: theme.color, textDecorationLine: "underline" }]}>Email Us</Text></Pressable>
      </View>
      <Seperator />

      <Pressable style={styles.buttonHolder} onPress={clearLogin} >Logout</Pressable> // do the thing

    </View>
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
  textHolder: {
    width: "60%",
    gap: 10,
  },
  progressHolder: {
    flexDirection: "column",
    width: "65%",
    alignItems: "center",
  },
  middle: {
    marginInline: "auto",
  },
  listingStyle: {
    fontSize: 16,
    fontFamily: "Tangerine",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  passwordContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
    alignItems: "center",

  },
  buttonHolder: {
    backgroundImage: "linear-gradient(to right bottom, #901431, #87112c, #7e0d28, #750923, #6c061f, #64051d, #5d051c, #55041a, #4b051a, #420719, #380818, #2f0816)",
    color: 'white',
    fontFamily: 'sans-serif',
    padding: 10,
    borderRadius: 5,
    cursor: "pointer",
  },
  showButton: {
    backgroundImage: "linear-gradient(to right bottom, #901431, #87112c, #7e0d28, #750923, #6c061f, #64051d, #5d051c, #55041a, #4b051a, #420719, #380818, #2f0816)",
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 14,
    padding: 5,
    borderRadius: 5,
    cursor: "pointer",
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
