import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DiscountCard, Divider, Navigation } from '../../components';
import data from '../../config/data.json'

const Discounts = props => {
  const renderItem = ({ item, index }) => {
    const { currentItems, moreItems } = props.modifiedData(data[item.category]);
    
    return (
      <View style={styles.cardWrapper}>
        <Divider 
          title={item.title} 
          rightTitle='Все' 
          onPressNavigate={() =>
            props.handleOnPressCategory(item, index)
          }
        />

        <FlatList
          data={currentItems}
          contentContainerStyle={styles.flatlistInsets}
          renderItem={({ item }) => (
            <DiscountCard
              cardStyle={styles.discountCard}
              item={item}
              onPress={() => props.handleSelectBenefit(item)}
            />         
          )}
          horizontal={true}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ListFooterComponentStyle={styles.paddingInsets}
          ListFooterComponent={
            <TouchableOpacity onPress={() => props.handleOnPressCategory(item, index)}>
              <View style={styles.moreCard}>
                <Text>Смотреть еще {moreItems.length}</Text>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    )
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navigation 
        data={data.categories} 
        activeItem={props.selectCategory} 
        onPress={props.handleOnPressCategory}
        scrollRef={props.scrollRef}
      />
      
      {!props.activeCategory ? (
        <FlatList
          data={data.categories}
          contentContainerStyle={styles.categoriesWrapper}
          ListHeaderComponent={
            <>
              <Divider title='Новинки' />
              <FlatList 
                data={data.novelty}
                contentContainerStyle={styles.flatlistInsets}
                renderItem={({ item }) => (
                  <DiscountCard
                    item={item}
                    onPress={() => props.handleSelectBenefit(item)}
                  />
                )}
                horizontal={true}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                
              />
            </>
          }
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={data[props.selectCategory.category]}
          contentContainerStyle={styles.paddingInsets}
          ListHeaderComponent={<Divider title={props.selectCategory.title} />}
          renderItem={({ item }) => (
            <DiscountCard
              item={item}
              cardStyle={styles.cardStyle}
              onPress={() => props.handleSelectBenefit(item)}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesWrapper: {
    flexGrow: 1, 
    paddingBottom: 20,
  },
  flatlistInsets: {
    paddingHorizontal: 8,
    paddingTop: 10,
  },
  paddingInsets: {
    paddingBottom: 20,
    paddingHorizontal: 8,
  },
  cardWrapper: {
    marginTop: 32,
  },
  discountCard: {
    width: 258,
    height: 152,
  },
  moreCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 258,
    height: 152,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'gray',
  },
  cardStyle: {
    width: 358, 
    height: 182, 
    marginTop: 16
  }
});

export default Discounts;