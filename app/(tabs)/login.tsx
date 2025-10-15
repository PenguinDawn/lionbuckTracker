import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



import { Colors } from '@/constants/Colors';

import { useColorScheme } from 'react-native';

import Header from '@/components/Header';
import { useFonts } from "expo-font";
import { useState } from 'react';
export default function LoginScreen() {

  

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
    <View>
        {/* username */}
        <Text style={[styles.label, {color: theme.color}]}>Username</Text>
        <TextInput></TextInput>
        {/* password */}
        <Text>Password</Text>
        <TextInput></TextInput>
        {/* login */}
        <Button>Login</Button>
    </View>

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
