import { StyleSheet, View } from 'react-native';

const Seperator = () => {

  return (
    <View style={[styles.sep]} />

)
}

export default Seperator


const styles = StyleSheet.create({
    sep: {
      width: "50%",
      height: 3,
      backgroundColor: "#e3d073ff",
      borderRadius: 15,
      marginTop: 10,
      marginBottom: 10,
    },

})