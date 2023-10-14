import React from 'react';
import AuthForm from '../components/auth/AuthForm';

const SignUpScreen = ({ navigation }) => {
  const onSubmit = () => {
    navigation.navigate('Home');
  };

  return <AuthForm isLogin={false} onSubmit={onSubmit} />;
};

export default SignUpScreen;
