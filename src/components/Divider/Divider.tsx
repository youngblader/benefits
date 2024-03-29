import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { DividerProps } from './types';

const Divider: FC<DividerProps> = ({ title, rightTitle, onPressNavigate, }) => {
  return (
    <TouchableOpacity onPress={onPressNavigate}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>{rightTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '600'
  },
});

export { Divider };