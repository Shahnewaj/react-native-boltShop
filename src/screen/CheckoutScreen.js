import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import HeaderBackButton from '../components/HeaderBackButton';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import CustomButton from '../components/CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../components/shop/CartItem';
import {
  removeProduct,
  reduceProduct,
  increaseProduct,
} from '../../store/action/cart';

const CheckoutScreen = (props) => {
  const cartTotal = useSelector((state) => state.cart.totalAmount);
  const allCartItem = useSelector((state) => {
    const newCartItems = [];

    for (const key in state.cart.cart) {
      newCartItems.push({
        productId: key,
        productTitle: state.cart.cart[key].productTitle,
        productPrice: state.cart.cart[key].productPrice,
        productImage: state.cart.cart[key].productImage,
        quantity: state.cart.cart[key].quantity,
        sum: state.cart.cart[key].sum,
      });
    }
    return newCartItems;
  });

  console.log(allCartItem);

  const dispatch = useDispatch();

  let total = 0;

  if (cartTotal === 0) {
    total = 0;
  } else {
    total = cartTotal - cartTotal * 0.05 + 10;
  }

  return (
    <View style={styles.conatiner}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.titleView}>
              <Text style={styles.title}> Checkout </Text>
            </View>
            <View style={styles.cartItemView}>
              <FlatList
                data={allCartItem}
                keyExtractor={(item) => item.productId}
                renderItem={({item}) => (
                  <CartItem
                    title={item.productTitle}
                    price={item.sum}
                    image={item.productImage}
                    vendor="Dummy Vendor"
                    quantity={item.quantity}
                    handleRemove={() => {
                      dispatch(removeProduct(item.productId));
                    }}
                    handleReduce={() => {
                      dispatch(reduceProduct(item.productId));
                    }}
                    handleIncrease={() => {
                      dispatch(increaseProduct(item.productId));
                    }}
                  />
                )}
              />
            </View>
            <View style={styles.addressView}>
              <Text style={styles.addressText}>
                Shewrapara, Mirpur, Dhaka-1216 House no: 938 Road no: 9
              </Text>
              <Entypo name="dot-single" size={40} color="#667EEA" />
            </View>
            <View style={styles.sumView}>
              <View style={styles.sumItem}>
                <Text style={styles.sumTitle}>SubTotal</Text>
                <Text style={styles.sumValue}>${cartTotal}</Text>
              </View>
              <View style={styles.sumItem}>
                <Text style={styles.sumTitle}>Discount</Text>
                <Text style={styles.sumValue}>5%</Text>
              </View>
              <View style={styles.sumItem}>
                <Text style={styles.sumTitle}>Shipping</Text>
                <Text style={styles.sumValue}>$10</Text>
              </View>
              <View style={styles.sumTotal}>
                <Text style={styles.sumTitle}>Total</Text>
                <Text style={styles.sumValue}>${total}</Text>
              </View>
            </View>
            <View style={styles.buttonView}>
              <CustomButton
                title="Back To Home"
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainView: {
    marginHorizontal: 20,
    flexDirection: 'column',
  },
  titleView: {
    marginTop: 60,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    color: '#707070',
    fontFamily: 'Segoe UI',
  },
  cartItemView: {},
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
  addressView: {
    flexDirection: 'row',
    borderColor: '#979797',
    borderBottomWidth: 1,
    paddingBottom: 30,
    marginVertical: 30,
  },
  addressText: {
    color: '#434343',
    fontSize: 18,
    fontFamily: 'Segoe UI',
  },
  sumView: {},
  sumItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sumTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#979797',
    marginVertical: 10,
    paddingVertical: 10,
  },
  sumTitle: {
    color: '#919191',
    fontSize: 18,
    fontFamily: 'Segoe UI',
    marginVertical: 5,
  },
  sumValue: {
    color: '#434343',
    fontSize: 18,
    fontFamily: 'Segoe UI',
    marginVertical: 5,
  },
  buttonView: {
    marginVertical: 30,
  },
});

CheckoutScreen.navigationOptions = (navData) => {
  return {
    header: () => null,
  };
};

export default CheckoutScreen;
