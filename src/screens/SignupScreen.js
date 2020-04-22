import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from 'react-navigation'

import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  // useEffect(() => {
  //   tryLocalSignin();
  // }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm 
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
      />
      <NavLink
        routeName='Signin'
        text='Already have an account? Sign in instead!'
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    // header: null, //deprecated in warning
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 10,
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 250,
  },
});

export default SignupScreen;
