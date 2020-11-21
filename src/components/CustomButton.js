import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = (props) => {
  return (
    <View>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={props.onPress}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#7788ED', '#85A2F6', '#90BCFF']}
            style={styles.linearButton}>
            <Text style={styles.buttonText}> {props.title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: '#000',
    backgroundColor: '#fff',
    shadowColor: '#3F4BBA',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 30,

    elevation: 3,
  },
  linearButton: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    paddingHorizontal: 60,
    paddingVertical: 15,
    textAlign: 'center',
    fontFamily: 'Segoe UI',
  },
  optionView: {},
  optionText: {},
});

export default CustomButton;
