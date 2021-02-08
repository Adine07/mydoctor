import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link size={12} title="Forgot My Password" />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('mainApp')} />
      <Gap height={30} />
      <Link size={16} title="Create New Account" align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 40, flex: 1, backgroundColor: colors.white},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
