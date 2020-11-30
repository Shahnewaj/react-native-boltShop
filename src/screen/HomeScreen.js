// import default react and components
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import icon set
import {useSelector} from 'react-redux';
// import demo data
import CategoryItem from '../components/shop/CategoryItem';
import ProductItem from '../components/shop/ProductItem';

const HomeScreen = (props) => {
  const Products = useSelector((state) => state.product.AllProduct);
  const Category = useSelector((state) => state.product.AllCategory);

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <SafeAreaView>
            <View style={styles.mainView}>
              <View style={styles.flatView}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>Categories</Text>
                </View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={Category}
                  renderItem={(itemData) => (
                    <CategoryItem
                      image={itemData.item.image}
                      color={itemData.item.color}
                      title={itemData.item.title}
                    />
                  )}
                />
              </View>

              <View style={styles.flatView}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>Featured</Text>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('Checkout');
                    }}>
                    <Text style={styles.seeAll}>See All </Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={Products}
                  renderItem={(itemData) => (
                    <ProductItem
                      onTabDetails={() =>
                        props.navigation.navigate('Details', {
                          productId: itemData.item.id,
                        })
                      }
                      title={itemData.item.title}
                      price={itemData.item.price}
                      image={itemData.item.image}
                    />
                  )}
                />
              </View>

              <View style={styles.flatView}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>Featured</Text>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('Checkout');
                    }}>
                    <Text style={styles.seeAll}>See All </Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={Products}
                  renderItem={(itemData) => (
                    <ProductItem
                      onTabDetails={() =>
                        props.navigation.navigate('Details', {
                          productId: itemData.item.id,
                        })
                      }
                      title={itemData.item.title}
                      price={itemData.item.price}
                      image={itemData.item.image}
                    />
                  )}
                />
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};

HomeScreen.navigationOptions = (navData) => {
  return {
    header: () => (
      <SafeAreaView>
        <TouchableOpacity>
          <View
            style={{paddingHorizontal: 20, marginBottom: 20, marginTop: 10}}>
            <Image
              source={require('../assets/menu.png')}
              style={{width: 25, height: 20, padding: 10}}
            />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    ),
  };
};

const styles = StyleSheet.create({
  // common style
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 20,
    // marginBottom: 150,
  },
  mainView: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  flatView: {
    // paddingTop: 20,
  },
  titleView: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    color: '#707070',
    fontFamily: 'Segoe UI',
  },
  seeAll: {
    color: '#656565',
    paddingHorizontal: 5,
    alignItems: 'center',
    top: 5,
  },

  // styles for category item
  categoryItemView: {
    marginRight: 15,
    // paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
  },
  catBgImage: {
    width: 150,
    height: 80,
    borderRadius: 5,
    overflow: 'hidden',
  },
  catTitleView: {
    opacity: 0.5,
    // backgroundColor: '#fff',
    height: 70,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  catName: {
    alignItems: 'center',
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 25,
    fontFamily: 'Segoe UI',
  },

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

export default HomeScreen;
