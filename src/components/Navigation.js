import { View, StyleSheet, FlatList  } from 'react-native';
import { CategoryCard } from '../components';

const Navigation = ({ data = [], scrollRef, activeItem = 0, onPress = () => {}  }) => {
  return (
    <View style={styles.navigationContainer}>
      <FlatList
        data={data}
        ref={scrollRef}
        contentContainerStyle={styles.flatlistInsets}
        ListHeaderComponent={
          <CategoryCard
            item={{ id: 0, title: 'Все скидки' }}
            activeItem={activeItem}
            onPress={() => onPress({ id: 0, title: 'Все скидки' }, 0, true)}
          />
        }
        renderItem={({ item, index }) => (
          <CategoryCard
            item={item}
            activeItem={activeItem}
            onPress={() => onPress(item, index)}
          />
        )}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    marginBottom: 16,
    borderBottomWidth: 1, 
    borderColor: 'gray'
  },
  flatlistInsets: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});

export { Navigation };
