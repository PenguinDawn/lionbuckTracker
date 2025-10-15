import { Image, StyleSheet } from 'react-native';

const ProfilePic = () => {

  return (
    <Image style={styles.imaging}></Image>

)
}

export default ProfilePic


const styles = StyleSheet.create({
    imaging: {
      width: "100px",
      height: "100px",
      backgroundColor: 'gray',
      borderRadius: 100,
      marginTop: 10,
      marginBottom: 10,
      marginInline: "auto",
    },

})