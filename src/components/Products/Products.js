import React from "react";
import { View, Text, Image, SafeAreaView } from 'react-native';
import styles from './Products.style';

const Products = ({ Product }) => {
    return (
        
        <View style={styles.container} >
          
            <View  style={styles.inner_container}>
                <Image style={styles.image} source={{ uri: Product.imgURL }} />
                <Text style ={styles.title} >{Product.title} </Text>
                <Text style ={styles.price}>{Product.price}</Text>
                {Product.inStock ==false &&
                  <Text style={styles.noStock}>STOKTA YOK </Text>  
                }
            </View>
        </View>

    )


}

export default Products;