import Header from '@/components/Header';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
export default function LoginScreen() {
  const router = useRouter();
    let theme;
        if (useColorScheme() == "dark") {
          theme = Colors.dark;
        }
        else {
          theme = Colors.light;
        }

      const [user, setUser] = useState("");
      const [password, setPassword] = useState("");
      const [submitted, setSubmit] = useState(false);

      useEffect(() => {router.navigate("/")} , [submitted])

  return (
    <View style={[styles.container, {backgroundColor: theme.background }]}>
      <Header />

      <View style={[styles.container, {alignItems: "center", justifyContent: "center", gap: 15}]}>
      <Text style={[styles.nameStyle, {color: theme.color} ]}>Login</Text>
       <TextInput value={user} onChangeText={(text) => {setUser(text)}} style={styles.search} placeholder='Username'></TextInput>
       <TextInput value={password} onChangeText={(text) => {setPassword(text)}} style={styles.search} placeholder='Password'></TextInput>
        <Pressable style={styles.buttonHolder} onPress={() => {setSubmit(true)}}>
          Submit
        </Pressable>
      </View>
    </View>
  );
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  separator: {
      height: 1,
      width: '100%',
      backgroundColor: "white",
  },
    listed: {
        flexDirection: 'column',
        gap: 8,
        fontSize: 18,
        width: '50%',
        marginInline: "auto",
    },
    textStyle: {
        fontSize: 16,
        color: "white",
    },
  buttonHolder: {
    backgroundImage: "linear-gradient(to right bottom, #901431, #87112c, #7e0d28, #750923, #6c061f, #64051d, #5d051c, #55041a, #4b051a, #420719, #380818, #2f0816)",
    fontFamily: 'sans-serif',
    padding: 10,
    borderRadius: 5,
    cursor: "pointer",
    color: "white",
  },
    pressText: {
      color: "white",
      fontSize: 16,
    },
    nameStyle: {
        fontSize: 36,
        fontWeight: "bold",
        letterSpacing: 1,
         marginBottom: 10,
    },
    search: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 8,
    borderColor: "maroon",
    borderWidth: 4,
    gap: 3,
    padding: 3,
    color: "black",
    fontSize: 16,

  },

})
