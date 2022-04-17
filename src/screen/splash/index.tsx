import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MathInput');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../public/images/logo-01-1.png')}
        resizeMode="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b0d6c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
