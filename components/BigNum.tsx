import { StyleSheet, Text, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';



const BigNumber = ({children, ...props}) => {
  let theme;
  if (useColorScheme() == "dark") {
  theme = Colors.dark.color;
}
else {
  theme = Colors.light.color;
}

  return (
      <Text style={[styles.textNums, {color: theme}]}>
        {children}
      </Text>
  )
}

export default BigNumber


const styles = StyleSheet.create({
    textNums: {
      fontSize: 24,
      fontFamily: "sans-serif",
      fontWeight: "bold",
    },
    textSlash: {
      marginTop: 5,
      fontSize: 20,
      fontFamily: "sans-serif",
    },
    textBaby: {
      fontSize: 16,
      fontFamily: "sans-serif",
    }

})
