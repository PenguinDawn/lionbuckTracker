import { StyleSheet, Text, View } from 'react-native';



import { Colors } from '@/constants/Colors';

import { useColorScheme } from 'react-native';

import Header from '@/components/Header';
import ProfilePic from '@/components/profilePic';
import Seperator from '@/components/Seperator';
import { useFonts } from "expo-font";
import { useState } from 'react';
export default function ProfileScreen() {

  

  // if statements to change the mealplan numbers
  const [fontsLoaded] = useFonts({
    "Tangerine-Reg": require("../../assets/fonts/Tangerine-Regular.ttf"),
    "Archivo-Reg": require("../../assets/fonts/Archivo-Regular.ttf"),
  });

      const [name, setName] = useState("Carl");
      const [userName, setuserName] = useState("Carlos2004");
      const [password, setPassword] = useState("password");
      const [mealplan, setmealplan] = useState("A");
      const [meals, setMeals] = useState(14);
      const [reset, setReset] = useState("week");
      const [lionBucks, setBucks] = useState(175);

      const [showing, setShowing] = useState(false);

      let theme;
        if (useColorScheme() == "dark") {
          theme = Colors.dark;
        }
        else {
          theme = Colors.light;
        }

  

  return (
    <View style={styles.container}>
      <Header />
      <ProfilePic />
      <Seperator />
      <View style={styles.textHolder}>
          {/* name */}
        <Text style={[styles.listingStyle, {color: theme.color}]}>{name}</Text>
          {/* username */}
        <Text style={[styles.listingStyle, {color: theme.color}]}>Username: {userName}</Text>
          {/* password */}
        <View style={styles.passwordContainer}>
          <Text style={[styles.listingStyle, {color: theme.color}]}>Password:</Text>
          {/* show password */}
          {showing && (
            <Text>{password}</Text>
          )}
          <View style={[styles.showButton]}>Show</View>
    
          {/* make the conditional showing */}
        </View>
      </View>

      
      <Seperator />

      <View style={styles.textHolder}>
          {/* meal plan */}
          <Text style={[styles.listingStyle, {color: theme.color}]}>Meal Plan {mealplan} ({meals} meals a {reset})</Text>
          {/* dining dollars given */}
          <Text style={[styles.listingStyle, {color: theme.color}]}>${lionBucks} per semester</Text>
      </View>
      <Seperator />

      <View style={styles.buttonHolder}>Logout</View>
      {/* logout */}

      {/* display */}

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
