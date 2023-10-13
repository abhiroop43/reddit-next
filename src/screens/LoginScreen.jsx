import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GlobalStyles } from '../themes/styles';
import CircularButton from '../components/shared/CircularButton';
import MaterialTextInput from '../components/shared/MaterialTextInput';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* top banner */}
      <View>
        <ImageBackground
          source={require('../../assets/header.jpg')} // Replace with the path or URL of your background image
          style={styles.topView}
        ></ImageBackground>
      </View>

      {/* login form */}
      <View style={styles.bottomView}>
        <Text style={styles.title}>
          The best <Text style={styles.titleBrandName}>Reddit</Text> experience
        </Text>
        <View style={styles.formFieldsContainer}>
          {/* <TextInput style={styles.input} placeholder="Username/Email" />

          <TextInput style={styles.input} secureTextEntry placeholder="Password" /> */}
          <MaterialTextInput label="Username" onChangeText={() => {}} />
          <MaterialTextInput
            label="Password"
            onChangeText={() => {}}
            secureTextEntry={true}
            customStyles={styles.input}
          />

          <View style={styles.buttonsContainer}>
            <View style={styles.signupContainer}>
              <Text style={styles.question}>New to Reddit?</Text>
              {/* TODO: move to separate component */}
              <TouchableOpacity>
                <Text style={styles.signUpLink}>
                  Sign up <Ionicons name="md-chevron-forward" size={18} color={GlobalStyles.colors.gray} />
                </Text>
              </TouchableOpacity>
            </View>
            {/* <Button style={styles.loginButton} title="Log in" /> */}
            <CircularButton>Log in</CircularButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
  },
  topView: {
    width: '100%',
    height: 400,
    position: 'absolute',
    top: 0,
  },
  bottomView: {
    width: '100%',
    height: 600,
    // paddingVertical: 25,
    // height: 600,
    backgroundColor: GlobalStyles.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    zIndex: 1,
    position: 'absolute',
    top: 350,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 60,
    marginTop: -50,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  titleBrandName: {
    color: GlobalStyles.colors.primary500,
  },
  formFieldsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 25,
    // width: '100%',
    // height: 50,
    // padding: 10,
    // borderBottomWidth: 1,
    // borderColor: GlobalStyles.colors.gray,
    // borderRadius: 8,
    // marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  signupContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  question: {
    fontSize: 14,
    color: GlobalStyles.colors.gray,
  },
  signUpLink: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.gray,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
