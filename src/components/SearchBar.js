import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.iconStyle} name="search" size={35} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        autoCorrect={false}
        //  autoCapitalize= 'none'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginVertical: 10,
  },
  iconStyle: {
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
  },
});

export default SearchBar;
