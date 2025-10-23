import { Image, StyleSheet } from 'react-native';
type proped = {
  srced: string,
}

const ProfilePic = ({srced}: proped) => {

  return (
    <Image style={styles.imaging} src={srced}></Image>
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