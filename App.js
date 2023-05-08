import { Fontisto, MaterialCommunityIcons , FontAwesome5 , AntDesign  } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

function CalculatorButton({content,color,onPress }) {
  return(
  
  <TouchableHighlight onPress={onPress} underlayColor={'#272b34'} activeOpacity={0.01}>
  <View style={[styles.button, {color: color}]}>
    <Text style={{
      fontSize:20,
      width:'100%',
      height:'100%',
      color:color,
      textAlign:'center',
      textAlignVertical:'center'
    }}>{content}</Text>
  </View>
</TouchableHighlight>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tela}>
      <Text style={{
        fontSize: 30,
        fontWeight:'900',
        color: 'white',
        fontFamily: 'monospace',
        margin:10,
        padding:10
        
      }}>
        308 x 42 = 
      12936
      </Text>
      </View>
      <View style={styles.teclado}>
        <View style={styles.coluna}>
          <CalculatorButton  content={'AC'} color={'#3ae2bf'}>
          </CalculatorButton>
          <CalculatorButton content={'7'} color={'white'}/>
          <CalculatorButton content={'4'} color={'white'}/>
          <CalculatorButton content={'1'} color={'white'}/>
          <CalculatorButton content={<Fontisto name="undo" size={24} color="white" />} color={'white'}/>
        </View>
        <View style={styles.coluna}>
          <CalculatorButton content={'+/-'} color={'#3ae2bf'}/>
          <CalculatorButton content={'8'} color={'white'}/>
          <CalculatorButton content={'5'} color={'white'}/>
          <CalculatorButton content={'2'} color={'white'}/>
          <CalculatorButton content={'0'} color={'white'}/>
        </View>
        <View style={styles.coluna}>
          <CalculatorButton content={'%'} color={'#3ae2bf'}/>
          <CalculatorButton content={'9'} color={'white'}/>
          <CalculatorButton content={'6'} color={'white'}/>
          <CalculatorButton content={'3'} color={'white'}/>
          <CalculatorButton content={'.'} color={'white'}/>
        </View>
        <View style={styles.coluna}>
          <CalculatorButton content={<MaterialCommunityIcons name="division" size={28} color="#c16a73" />} color={'#c16a73'}/>
          <CalculatorButton content={<FontAwesome5 name="times" size={20} color="c16a73" />} color={''}/>
          <CalculatorButton content={<AntDesign name="minus" size={24} color="#c16a73" />} color={'#c16a73'}/>
          <CalculatorButton content={<AntDesign name="plus" size={24} color="#c16a73" />} color={'#c16a73'}/>
          <CalculatorButton content={<FontAwesome5 name="equals" size={24} color="#c16a73black" />} color={'#c16a73'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#22252e',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  tela: {
    flex:4,
    width:'100%',
    flexWrap:'wrap',
    backgroundColor:'#22252e',
    alignItems: "center",
    alignContent: "flex-end",
    justifyContent:"flex-end",
  },
  teclado:{
    flex:6,
    flexDirection: 'row',
    width:'100%',
    flexWrap:'wrap',
    backgroundColor:'#292d36',
    borderTopRightRadius:50,
    borderTopLeftRadius:50
  },
  coluna: {
    flex:1,
    flexDirection:'column',
    backgroundColor:'#292d36',
    height:'100%',
    width:'100%',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    justifyContent: 'space-between',
    alignContent: 'center',
    margin:10,
    paddingBottom:10
  },
  button:{
    flexGrow:1,
    width:'100%',
    height:'15%',
    backgroundColor: '#272b34',
    borderRadius:30,
    alignItems:'center',
    alignContent: 'center',
    justifyContent:'center',
    padding:10

    
  },
  



  
});
