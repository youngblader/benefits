import React, { useState, useRef } from 'react';
import Discounts from './Discounts';

import data from '../../config/data.json'

const DiscountsContainer = props => {
  const [selectCategory, setSelectCategory] = useState(data.categories[0]);
  const [activeCategory, setActiveCategory] = useState(false);

  const scrollRef = useRef();
  
  const handleSelectBenefit = el => {
    props.navigation.navigate('DetailsBenefitInfo', { benefit: el });
  };

  const modifiedData = data => {
    let currentItems = [];
    let moreItems = [];

    data?.reduce((acc, curr, index) => 
      index <= 3 ? acc + currentItems.push(curr) : acc + moreItems.push(curr), 0);
  
    return ({ currentItems, moreItems })
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
      setActiveCategory={setActiveCategory}
    />
  );
}

export { DiscountsContainer };