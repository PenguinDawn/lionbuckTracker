import { StyleSheet, Text, View } from 'react-native';


const ThemedSchedule = ({children, ...props}) => {
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
        backgroundColor: "maroon",
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
    }
})
