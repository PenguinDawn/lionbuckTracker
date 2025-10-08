import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';


const ThemedSchedule = ({children, ...props}) => {
  const [fontsLoaded] = useFonts({
    "Archivo-Reg": require("../assets/fonts/Archivo-Regular.ttf"),
  });
  return (
    <View
    style={[styles.maroon]}>
      <Text style={[styles.textMaroon]}>
        {children}
      </Text>
    </View>
  )
}

export default ThemedSchedule

const styles = StyleSheet.create({
    maroon: {
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundImage: "linear-gradient(to right bottom, #901431, #87112c, #7e0d28, #750923, #6c061f, #64051d, #5d051c, #55041a, #4b051a, #420719, #380818, #2f0816)",
        color: 'white',
        fontFamily: 'sans-serif',
        fontWeight: 'semibold',
        padding: 10,
        marginBottom: 5,
        fontSize: 16,
        flexDirection: 'row',
        width: '70%',
    },
    textMaroon: {
      color: 'white',
      fontSize: 16,
      fontFamily: "Archivo-Reg, sans-serif"
    }
})
