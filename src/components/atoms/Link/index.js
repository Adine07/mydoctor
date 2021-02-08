import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.link(size, align)}>{title}</Text>
    </View>
  );
};

export default link;

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary.Normal,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
