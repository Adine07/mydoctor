import React from 'react';
import {StyleSheet} from 'react-native';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;

const styles = StyleSheet.create({});
