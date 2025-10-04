import { Text, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';


const ThemedText = ({children, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
      <Text style={[{fontSize: 18}]}>
        {children}
      </Text>
  )
}

export default ThemedText

