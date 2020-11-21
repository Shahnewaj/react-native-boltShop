// import default react and components
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import icon set
import Ionicon from 'react-native-vector-icons/Ionicons';
// import demo data
import {category, product} from '../data/data';

// render item for category part

const renderCategory = (itemData) => (
  <TouchableOpacity>
    <View style={styles.categoryItemView}>
      <ImageBackground
        source={{uri: itemData.item.image}}
        style={styles.catBgImage}>
        <View
          style={{
            backgroundColor: `${itemData.item.color}`,
            opacity: 0.8,
            height: '100%',
          }}>
          <Text style={styles.catName}> {itemData?.item.title} </Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);
// render product item
const renderProduct = (itemData) => (
  <TouchableOpacity>
    <View style={styles.productView}>
      <Image style={styles.productImage} source={{uri: itemData.item.image}} />
      <Text style={styles.productPrice}> ${itemData?.item.price} </Text>
      <Text style={styles.productTitle}> {itemData?.item.title} </Text>
    </View>
  </TouchableOpacity>
);

console.log(category);

const HomeScreen = () => {
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
                  data={category}
                  renderItem={renderCategory}
                />
              </View>

              <View style={styles.flatView}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>Featured</Text>
                  <TouchableOpacity>
                    <Text style={styles.seeAll}>See All </Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={product}
                  renderItem={renderProduct}
                />
              </View>

              <View style={styles.flatView}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>Best Sell</Text>
                  <TouchableOpacity>
                    <Text style={styles.seeAll}>See All </Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={product}
                  renderItem={renderProduct}
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
        <View style={{paddingHorizontal: 20}}>
          <Ionicon name="menu-outline" size={30} color="#404040" />
        </View>
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
