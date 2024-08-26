import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const SectionA = () => {
  return (
    <View style={styles.container}>
       <Image
        source= {require("@/assets/images/home1.png")}
       />
       <Text style={styles.description}>
       "Empowering minds through maritime knowledge and leadership, SEI Educational Trust's naval education program fosters innovation, discipline, and excellence. Join us to navigate the future of naval operations and defense with unparalleled expertise, shaping the leaders of tomorrow in maritime affairs."
       </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    description:{
        fontSize: 16,
        fontWeight: '300',
        marginTop: 20,
        textAlign:"justify",
    }
})

export default SectionA