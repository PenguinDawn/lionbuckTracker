import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from "expo-font";



const Header = ({...props}) => {
      const [fontsLoaded] = useFonts({
    "Archivo-Reg": require("../assets/fonts/Archivo-Regular.ttf"),
  });
  return (
    <View style={[styles.maroon]}>
      <Text style={[styles.textMaroon]}>
        FHU Meal Tracker
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    maroon: {
        height: 'auto',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundImage: "linear-gradient(to right bottom, #901431, #87112c, #7e0d28, #750923, #6c061f, #64051d, #5d051c, #55041a, #4b051a, #420719, #380818, #2f0816)",
        color: 'white',
        fontFamily: 'sans-serif',
        fontWeight: 'semibold',
        padding: 10,
        paddingTop: 50,
        marginBottom: 5,
        fontSize: 16,
        flexDirection: 'row',
        width: '100%',
    },
    textMaroon: {
      color: 'white',
      fontSize: 36,
      fontFamily: "Archivo-Reg, script",
    }
})
