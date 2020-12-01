import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartItem = (props) => {
  return (
    <View style={styles.itemView}>
      <View style={styles.itemImageView}>
        <Image style={styles.itemImage} source={{uri: props.image}} />
      </View>
      <View style={styles.itemDetailsView}>
        <Text style={styles.itemTitle}>{props.title}</Text>
        <Text style={styles.itemVendor}>{props.vendor} </Text>
        <Text style={styles.itemPrice}>${props.price} </Text>
        <View style={styles.itemAdjustView}>
          <TouchableOpacity onPress={props.handleReduce}>
            <AntDesign name="minus" size={20} color="#565656" />
          </TouchableOpacity>
          <Text style={styles.number}> {props.quantity} </Text>
          <TouchableOpacity onPress={props.handleIncrease}>
            <AntDesign name="plus" size={18} color="#565656" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemCancelView}>
        <TouchableOpacity onPress={props.handleRemove}>
          <Feather name="x" size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    // borderWidth: 1,
    shadowColor: '#ddd',
    shadowOffset: {
      width: -1,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
    padding: 10,
  },
  itemImageView: {
    marginRight: 10,
  },
  itemImage: {
    width: 120,
    height: 120,
  },
  itemDetailsView: {
    marginHorizontal: 5,
  },
  itemTitle: {
    color: '#434343',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    lineHeight: 22,
  },
  itemVendor: {
    fontFamily: 'Segoe UI',
    fontSize: 16,
    color: '#919191',
    lineHeight: 22,
  },
  itemPrice: {
    color: '#374ABE',
    fontFamily: 'Segoe UI',
    fontSize: 16,
    lineHeight: 22,
  },
  itemAdjustView: {
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    // alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  number: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: '#565656',
    fontFamily: 'Segoe UI',
  },
  itemCancelView: {
    alignItems: 'flex-end',
    flex: 1,
    padding: 10,
  },
});

export default CartItem;
