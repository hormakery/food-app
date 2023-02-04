import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HeaderTab = () => {
    const [activeTab, setActiveTab]=useState('delivery')
  return (
    <View style={styles.container}>
      <HeaderButton text= 'Delivery' btnColor='black' textColor='white' activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HeaderButton text='Pickup' btnColor='white' textColor='black' activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  )
}

export default HeaderTab

const HeaderButton=(props)=>(
    <TouchableOpacity style={styles.headerButton} onPress={()=>setActiveTab(props.text)}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container:{
        alignSelf: 'center',
        backgroundColor: props.activeTab ===props.text ? 'black': 'white'
    },
    headerButton:{
        borderRadius: 30,
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: 'back'
    },
    text:{
        fontSize: 15,
        color: '#fff',
        fontWeight: '900'
    },
})