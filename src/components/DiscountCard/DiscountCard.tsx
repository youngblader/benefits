
import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { DiscountCardProps  }  from './types'


const DiscountCard: FC<DiscountCardProps> = ({ item, cardStyle, onPress, }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View>
        {/* FastImage */}
        <Image
          style={[styles.card, cardStyle]}
          source={{ uri: item.source }} 
          resizeMode={'cover'} 
        />
      
        <View style={styles.discountFooter}>
          <Text style={styles.discountFooterTitle}>{`-${item.discount}% по промокоду`}</Text>
        </View>
      </View>
      {item.title && <Text style={styles.cardTitle}>{item.title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 8,
  },
  card: {
    width: 328,
    height: 182,
    borderRadius: 14,
  },
  discountFooter: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 12,
    width: 200,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#FF48BC',
  },
  discountFooterTitle: {
    color: '#FFF',
    fontSize: 14,
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'normal',
  }
});

export { DiscountCard };