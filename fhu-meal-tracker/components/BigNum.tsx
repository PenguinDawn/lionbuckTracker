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
    },
    textSlash: {
      marginTop: 5,
      fontSize: 20,
    },
    textBaby: {
      fontSize: 16,
    }

})
