import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Index = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('deviceInfo')}>
      <Text style={{color:'white'}}>Devive Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('callsLog')}>
      <Text style={{color:'white'}}>Call Logs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('makePhoneCalls')}>
      <Text style={{color:'white'}}>Make A Phone Calls</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('documentAndFiles')}>
      <Text style={{color:'white'}}>Documents/Files</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('camera')}>
      <Text style={{color:'white'}}>Camera</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#ffff',
            flex:1,
        },
            button:{
                backgroundColor:'grey',
                width:'35%',
                height:'15%',
                borderRadius:25,
                justifyContent:'center',
                alignItems:'center'
            

        }
    }
)