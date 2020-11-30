// import default react and components
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import icon set

const ProductItem = (props) => (
  <TouchableOpacity onPress={props.onTabDetails}>
    <View style={styles.productView}>
      <Image style={styles.productImage} source={{uri: props.image}} />
      <Text style={styles.productPrice}> ${props.price} </Text>
      <Text style={styles.productTitle}> {props.title} </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // product image view
  productView: {
    paddingRight: 30,
  },
  productImage: {
    width: 150,
    height: 180,
    borderRadius: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#2A2A2A',
    fontFamily: 'Segoe UI',
    marginVertical: 5,
  },
  productTitle: {
    color: '#2A2A2A',
    fontFamily: 'Segoe UI',
    fontSize: 16,
  },
});

export default ProductItem;
