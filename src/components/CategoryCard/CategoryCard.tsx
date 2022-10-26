import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { CategoryCardProps } from './types';

const CategoryCard: FC<CategoryCardProps> = ({ item, activeItem, onPress }) => {
  const backgroundColor = item?.id === activeItem.id ? '#1F51FF' : '#FFF';
  const color = item?.id === activeItem.id ? 'white' : 'black' 
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, { backgroundColor }]}>
        <Text style={[styles.cardTitle, { color }]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    paddingHorizontal: 8,
    height: 40,
    minWidth: 120,
    borderRadius: 14, 
    borderWidth: 1,
    borderColor: '#1F51FF',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export { CategoryCard };