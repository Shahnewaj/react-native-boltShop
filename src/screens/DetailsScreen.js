import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import yelp from '../api/yelp';
const DetailsScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  console.log(result);
  return (
    <View>
      <Text style={styles.title}>{result.name} </Text>
      <FlatList
        data={result.photos}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  image: {
    width: 300,
    height: 250,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    marginVertical: 10,
  },
});

export default DetailsScreen;
