import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Dimensions, KeyboardAvoidingView } from 'react-native';
import { GlobalStyles } from '../../themes/styles';
import CircularButton from '../shared/CircularButton';
import MaterialTextInput from '../shared/MaterialTextInput';
import IconButton from '../shared/IconButton';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

const AuthForm = ({ isLogin, onSubmit }) => {
  const navigation = useNavigation();

  redirectNewUser = (isLogin) => {
    // console.log(isLogin);
    if (isLogin) {
      navigation.navigate('SignUp');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      {/* top banner */}
      <View>
        <ImageBackground source={require('../../../assets/header.jpg')} style={styles.topView}></ImageBackground>
      </View>

      {/* login form */}
      <View style={styles.bottomView}>
        <Text style={styles.title}>
          The best <Text style={styles.titleBrandName}>Reddit</Text> experience
        </Text>
        <View style={styles.formFieldsContainer}>
          {!isLogin && <MaterialTextInput label="Email" onChangeText={() => {}} customStyles={styles.input} />}
          <MaterialTextInput label="Username" onChangeText={() => {}} customStyles={styles.input} />
          <MaterialTextInput
            label="Password"
            onChangeText={() => {}}
            secureTextEntry={true}
            customStyles={styles.input}
          />

          <View style={styles.buttonsContainer}>
            <View style={styles.signupContainer}>
              <Text style={styles.question}>{isLogin ? 'New to Reddit?' : 'Already registered?'}</Text>
              <IconButton
                textStyle={styles.signUpLink}
                icon="md-chevron-forward"
                size={18}
                iconColor={GlobalStyles.colors.gray}
                onPress={() => {
                  redirectNewUser(isLogin);
                }}
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </IconButton>
            </View>
            <CircularButton
              onPress={onSubmit}
              gradient={[GlobalStyles.colors.primary500, GlobalStyles.colors.primary200]}
            >
              {isLogin ? 'Log in' : 'Sign Up'}
            </CircularButton>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // paddingTop: StatusBar.currentHeight,
  },
  topView: {
    width: '100%',
    height: windowHeight * 0.4,
    position: 'absolute',
    top: 0,
  },
  bottomView: {
    width: '100%',
    height: 600,
    // paddingVertical: 25,
    // height: 600,
    backgroundColor: GlobalStyles.colors.secondary,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    zIndex: 1,
    position: 'absolute',
    top: windowHeight * 0.32,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    // marginBottom: 5,
    marginTop: -25,
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
    marginTop: 2,
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

export default AuthForm;
