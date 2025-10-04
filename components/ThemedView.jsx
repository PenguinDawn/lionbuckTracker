import { useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemedView = ({style, children, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View 
    style={[{backgroundColor: theme.backgroundColor}, style]}
    {...props}>
        {children}
    </View>
  )
}

export default ThemedView