import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CustomButton from '../components/CustomButton';
import HeaderBackButton from '../components/HeaderBackButton';

const OtpScreen = (props) => {
  const handlePress = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}> Verify</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputTitle}> OTP</Text>
        <TextInput style={styles.inputField} placeholder="Enter OTP" />
      </View>
      <View style={styles.buttonView}>
        <CustomButton title="Verify" onPress={handlePress} />
      </View>
    </View>
  );
};

OtpScreen.navigationOptions = (navData) => {
  return {
    header: () => <HeaderBackButton />,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
  },
  mainView: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleView: {
    marginVertical: 30,
  },
  title: {
    fontSize: 30,
    color: '#707070',
    fontFamily: 'Segoe UI',
  },
  inputView: {
    marginTop: 50,
  },
  inputTitle: {
    color: '#A6A6A6',
    fontSize: 16,
    fontFamily: 'Segoe UI',
    marginHorizontal: 5,
  },
  inputField: {
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'Segoe UI',
    color: '#404040',
  },
  buttonView: {
    marginHorizontal: 20,
    marginTop: '30%',
  },
});

export default OtpScreen;
