import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ResultList from './ResultList';

const ResultDetails = ({result}) => {
  return (
    <View style={styles.resultView}>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={styles.name}> {result.name} </Text>
      <Text style={styles.rating}>
        {result.rating} Stars , {result.review_count} Reviews{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultView: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  rating: {
    paddingHorizontal: 5,
  },
});

export default ResultDetails;
