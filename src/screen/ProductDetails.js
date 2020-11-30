import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import HeaderBackButton from '../components/HeaderBackButton';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as cartAction from '../../store/action/cart';

const ProductDetails = (props) => {
  const productId = props.navigation.getParam('productId');

  const targetProduct = useSelector((state) =>
    state.product.AllProduct.find((prod) => prod.id === productId),
  );

  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(cartAction.addToCart(targetProduct));
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.imageView}>
          <Image
            source={{uri: targetProduct.image}}
            style={styles.bannerImage}
          />
          <View style={styles.titleView}>
            <Text style={styles.title}>{targetProduct.title}</Text>
            <Text style={styles.price}>${targetProduct.price}</Text>
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity onPress={handleBuy}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> BUY NOW </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

ProductDetails.navigationOptions = (navData) => {
  return {
    header: () => (
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginBottom: 20,
                  marginTop: 10,
                }}>
                <Image
                  source={require('../assets/menu.png')}
                  style={{width: 25, height: 20, padding: 10}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={() => {
                navData.navigation.navigate('Checkout');
              }}>
              <IonIcon name="cart-outline" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  imageView: {
    marginHorizontal: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  titleView: {
    marginVertical: 30,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Segoe UI',
    marginBottom: 15,
    color: '#2A2A2A',
    marginHorizontal: 20,
  },
  price: {
    color: '#667EEA',
    fontSize: 20,
    fontFamily: 'Segoe UI',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#667EEA',
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Segoe UI',
    paddingBottom: 5,
    color: '#fff',
  },
  // header style
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
});

export default ProductDetails;
