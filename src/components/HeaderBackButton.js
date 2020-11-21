import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';

const HeaderBackButton = (props) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.backbuttonView}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicon name="arrow-back-sharp" size={30} color="#C5CCD6" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  backbuttonView: {
    paddingHorizontal: 15,
  },
});

export default withNavigation(HeaderBackButton);
