import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp Page</Text>
      <Text>email</Text>
      <Text>Password</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
