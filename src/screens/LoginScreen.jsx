import React from 'react';
import AuthForm from '../components/auth/AuthForm';

const LoginScreen = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('Home');
  };

  return <AuthForm isLogin={true} onSubmit={onSubmit} />;
};

export default LoginScreen;
