import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Products from './components/Products/Products';
import Products_data from './store.json';
import { Colors } from "react-native/Libraries/NewAppScreen";
import {SearchBar} from 'react-native-elements';


function App() {

const renderProducts =({item})=> <Products Product={item} />;

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text} >PATIKASTORE</Text>
      <SearchBar 
      round
      placeholder="Ara..."
      value={0}
  
      />
      <FlatList 
       data={Products_data}
       renderItem={renderProducts}
       numColumns= {2} />
          

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'purple'
  }
});

export default App;
