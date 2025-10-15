import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';

const SmallNumber = ({children, ...props}) => {
      let theme;
  if (useColorScheme() == "dark") {
    theme = Colors.dark.color;
  }
  else {
    theme = Colors.light.color;
  }

  return (
    <View style={[styles.flexed]}>
      <Text style={[styles.textSlash, {color: theme}]}>/</Text>
      <Text style={[styles.textBaby, {color: theme}]}>{children}</Text>
    </View>
)
}

export default SmallNumber


const styles = StyleSheet.create({
    flexed: {
      flexDirection: "row",
    },
    textSlash: {
      fontSize: 20,
      marginTop: 7,
      fontFamily: "sans-serif",
      paddingLeft: 2,
    },
    textBaby: {
      paddingTop: 2,
      fontSize: 16,
      marginTop: 9,
      paddingLeft: 2,
      fontFamily: "sans-serif",
    }

})