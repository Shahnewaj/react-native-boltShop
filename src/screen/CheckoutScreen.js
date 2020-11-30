import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import HeaderBackButton from '../components/HeaderBackButton';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {product} from '../data/data';
import CustomButton from '../components/CustomButton';

const CheckoutScreen = () => {
  return (
    <View style={styles.conatiner}>
      <SafeAreaView>
        <View style={styles.mainView}>
          <View style={styles.titleView}>
            <Text style={styles.title}> Checkout </Text>
          </View>
          <View style={styles.cartItemView}>
            <View style={styles.itemView}>
              <View style={styles.itemImageView}>
                <Image
                  style={styles.itemImage}
                  source={require('../assets/welcome.png')}
                />
              </View>
              <View style={styles.itemDetailsView}>
                <Text style={styles.itemTitle}>Women T-Shirt</Text>
                <Text style={styles.itemVendor}> Lotto </Text>
                <Text style={styles.itemPrice}> $18 </Text>
                <View style={styles.itemAdjustView}>
                  <TouchableOpacity>
                    <AntDesign name="minus" size={20} color="#565656" />
                  </TouchableOpacity>
                  <Text style={styles.number}> 7 </Text>
                  <TouchableOpacity>
                    <AntDesign name="plus" size={18} color="#565656" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.itemCancelView}>
                <TouchableOpacity>
                  <Feather name="x" size={26} />
                </TouchableOpacity>
              </View>
            </View>
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
              <Text style={styles.sumValue}>$34</Text>
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
              <Text style={styles.sumValue}>$10</Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <CustomButton title="Back To Home" onPress={() => {}} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#fff',
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

// CheckoutScreen.navigationOptions = (navData) => {
//   return {
//     header: () => null,
//   };
// };
// CheckoutScreen.navigationOptions = () => {
//   return {
//     header: () => <HeaderBackButton />,
//   };
// };

export default CheckoutScreen;
