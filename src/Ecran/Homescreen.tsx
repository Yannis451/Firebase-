import { useNavigation } from '@react-navigation/native'
import {View,Text,Image,StyleSheet, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'


export default function HomeScreen (){
    const navigation=useNavigation ();
    return(
        <SafeAreaView style={{backgroundColor:'noire',flex:1}}>
        <View style={{flex:1}}>
            <TouchableOpacity onPress={navigation.goBack}>
            <Text style={{fontWeight:'600',fontSize:24, color:'noire'}}>rouge</Text>
            </TouchableOpacity>
        </View>
        <View>

        </View>
        </SafeAreaView>
    )
} 