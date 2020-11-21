import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = (props) => {
  const handlePress = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.mainView}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Welcome to Bolt </Text>
          </View>
          <View style={styles.imageView}>
            <Image
              source={require('../assets/welcome.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.buttonView}>
            <CustomButton title="Log In with phone" onPress={handlePress} />
            <View style={styles.optionView}>
              <Text style={styles.optionText}> Shop with us</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

WelcomeScreen.navigationOptions = (navData) => {
  return {
    header: () => null,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleView: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: '#707070',
    fontFamily: 'Segoe UI',
  },
  imageView: {
    marginTop: '40%',
  },
  image: {
    width: 320,
    height: 270,
  },
  buttonView: {
    marginTop: '40%',
  },
  button: {},
  optionView: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  optionText: {
    color: '#454242',
    fontSize: 16,
    fontFamily: 'Segoe UI',
  },
});

export default WelcomeScreen;
