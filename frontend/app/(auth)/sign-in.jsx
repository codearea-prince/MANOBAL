import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>SignIn Page</Text>
      <Text>email</Text>
      <Text>Password</Text>
      <Text> Don't have an account?</Text>
      {/* press the signup link */}
      <Link href="/sign-up"> Sign Up</Link>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
