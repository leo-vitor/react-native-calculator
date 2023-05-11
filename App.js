import { Fontisto, MaterialCommunityIcons , FontAwesome5 , AntDesign  } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useState } from 'react'; 

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

function CalcDisplay(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{props.result}</Text>
    </View>
  );
}

export default function App() {

  const [result, setResult] = useState('');

  

  const handleNumber = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const handleOperation = (value) => {
    setResult((prevResult) => {
      if (prevResult === '') {
        return '';
      } else if (
        prevResult.endsWith('+') ||
        prevResult.endsWith('-') ||
        prevResult.endsWith('*') ||
        prevResult.endsWith('/')
      ) {
        return prevResult.slice(0, -1) + value;
      } else {
        return prevResult + value;
      }
    });
  };

  const handleEqual = () => {
    let finalResult = calculate();
    setResult(finalResult);
  };

  const handleClear = () => {
    setResult('');
  };
  
  const handleNegate = () => {
    setResult((parseFloat(result) * -1).toString());
  };


   
  const handleDecimal = () => {
    setResult((prevResult) => {
      if (prevResult === '') {
        return '0.';
      } else if (prevResult.includes('.')) {
        return prevResult;
      } else {
        return prevResult + '.';
      }
    });
  };

  const calculate = () => {
    let expression = result;
    if (
      expression.endsWith('+') ||
      expression.endsWith('-') ||
      expression.endsWith('*') ||
      expression.endsWith('/')
    ) {
      expression = expression.slice(0, -1);
    }

    try {
      let result = eval(expression);
      return result.toString();
    } catch (error) {
      return 'Error';
    }
  };


  const handlePercentage = () => {
    setResult((parseFloat(result) / 100).toString());
  };


  const handleBackspace = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.tela}>
        <CalcDisplay result={result.toString()} />
      </View>
      <View style={styles.teclado}>
        <View style={styles.coluna}>
          <CalculatorButton  onPress = {() => handleClear()}content={'AC'} color={'#3ae2bf'}>
          </CalculatorButton>
          <CalculatorButton onPress ={()=> handleNumber(7)} content={'7'} color={'white'}/>
          <CalculatorButton onPress ={()=> handleNumber(4)} content={'4'} color={'white'}/>
          <CalculatorButton onPress ={()=> handleNumber(1)} content={'1'} color={'white'}/>
          <CalculatorButton onPress={() => handleBackspace()} content={<Fontisto name="undo" size={24} color="white" />} color={'white'}/>
        </View>
        <View style={styles.coluna}>
          <CalculatorButton onPress = {() => handleNegate()}content={'+/-'} color={'#3ae2bf'}/>
          <CalculatorButton onPress ={()=> handleNumber(8)} content={'8'} color={'white'}/>
          <CalculatorButton onPress ={()=> handleNumber(5)} content={'5'} color={'white'}/>
          <CalculatorButton onPress ={()=> handleNumber(2)} content={'2'} color={'white'}/>
          <CalculatorButton onPress ={()=> handleNumber(0)} content={'0'} color={'white'}/>
        </View>
        <View style={styles.coluna}>
          <CalculatorButton onPress={() => handlePercentage()}content={'%'} color={'#3ae2bf'}/>
          <CalculatorButton onPress ={()=> handleNumber(9)} content={'9'} color={'white'}/>
          <CalculatorButton onPress ={()=> handleNumber(6)} content={'6'} color={'white'}/>
          <CalculatorButton onPress ={()=> handleNumber(3)} content={'3'} color={'white'}/>
          <CalculatorButton onPress ={()=> handleDecimal()} content={'.'} color={'white'}/>
        </View>
        <View style={styles.coluna}>
          <CalculatorButton onPress ={()=> handleOperation('/')} content={<MaterialCommunityIcons name="division" size={28} color="#c16a73" />} color={'#c16a73'}/>
          <CalculatorButton onPress ={()=> handleOperation('*')} content={<FontAwesome5 name="times" size={20} color="#c16a73" />} color={''}/>
          <CalculatorButton onPress ={()=> handleOperation('-')} content={<AntDesign name="minus" size={24} color="#c16a73" />} color={'#c16a73'}/>
          <CalculatorButton onPress ={()=> handleOperation('+')} content={<AntDesign name="plus" size={24} color="#c16a73" />} color={'#c16a73'}/>
          <CalculatorButton onPress ={() => handleEqual()} content={<FontAwesome5 name="equals" size={24} color="#c16a73black" />} color={'#c16a73'}/>
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

  resultText: {
    fontSize: 64,
    color: 'white',
    textAlignVertical: 'bottom',
    textAlign: 'right',
    fontFamily: "monospace",
    margin: 16,
  },
  



  
});
