import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, List, Profile} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile/>
      <Text>user Profile Page</Text>
      <List name="aa" />
      <List />
      <List />
      <List />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
