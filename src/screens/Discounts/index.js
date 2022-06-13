import React, { useState, useRef } from 'react';
import Discounts from './Discounts';

const startNavigationItem =  { id: 0, title: 'Все скидки' };

const DiscountsContainer = props => {
  const [selectCategory, setSelectCategory] = useState(startNavigationItem || {});
  const [activeCategory, setActiveCategory] = useState(false);

  const scrollRef = useRef();
  
  const handleSelectBenefit = el => {
    props.navigation.navigate('DetailsBenefitInfo', { benefit: el });
  };

  const modifiedData = data => {  
    return data?.reduce((acc, curr, index) => {       
      if (index <= 3) {
        return {
          currentItems: [...acc.currentItems, curr], 
          moreItems: [...acc.moreItems]
        }
      } else {
        return {
          currentItems: [...acc.currentItems], 
          moreItems: [...acc.moreItems, curr]
        }
      }
    }, { currentItems: [], moreItems: [] });
  }

  const handleOnPressCategory = (item, index, navigate = false) => {
    if (!navigate) {
      setActiveCategory(true);
      scrollRef?.current?.scrollToIndex({
        animated: true,
        index,
      });
    } else {
      setActiveCategory(false);
    }
    setSelectCategory(item);
  };

  return (
    <Discounts 
      {...props}
      scrollRef={scrollRef}
      activeCategory={activeCategory}
      selectCategory={selectCategory}
      modifiedData={modifiedData}
      handleOnPressCategory={handleOnPressCategory}
      handleSelectBenefit={handleSelectBenefit}
    />
  );
}

export { DiscountsContainer };