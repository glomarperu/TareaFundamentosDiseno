import { View, StyleSheet, Text } from 'react-native'

export const Exercises09 = () => {
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
      alignItems: 'center'     

    },
    box: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
    },
    redBox: {
      backgroundColor: '#ff5151',
      top: 100
      
    },
    greenBox: {      
      backgroundColor: '#51ff8b',
      left: 100,
    },
    blueBox: {
      backgroundColor: '#5188ff'
    }
  })