import { View, StyleSheet, Text } from 'react-native'

export const Exercises08 = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.redBox ]} />
        <View style={[styles.box, styles.greenBox ]} />
        <View style={[styles.box, styles.blueBox ]} />
    </View>
  )
}


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b6b6b6',      
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center'

    },
    box: {
      
      height: 100,
      borderWidth: 10,
      borderColor: 'white'
    },
    redBox: {
      backgroundColor: '#ff5151',
      height: '50%',
      width: '100%'
      
    },
    greenBox: {      
      backgroundColor: '#51ff8b',
      height: '30%',
      width: '100%'
    },
    blueBox: {
      backgroundColor: '#5188ff',
      height: '20%',
      width: '100%'
    }
  })