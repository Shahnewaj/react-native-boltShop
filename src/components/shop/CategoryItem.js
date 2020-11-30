// import default react and components
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import icon set

const CategoryItem = (props) => (
  <TouchableOpacity>
    <View style={styles.categoryItemView}>
      <ImageBackground source={{uri: props.image}} style={styles.catBgImage}>
        <View
          style={{
            backgroundColor: `${props.color}`,
            opacity: 0.8,
            height: '100%',
          }}>
          <Text style={styles.catName}> {props.title} </Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // common style

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
});

export default CategoryItem;
