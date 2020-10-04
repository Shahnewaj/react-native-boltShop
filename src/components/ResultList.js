import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultDetails from './ResultDetails';

const ResultList = ({title, result, navigation}) => {
  if (!result.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}> {title} </Text>

      <FlatList
        horizontal={true}
        data={result}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', {id: item.id});
            }}>
            <ResultDetails result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});

export default withNavigation(ResultList);
