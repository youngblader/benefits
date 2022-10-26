import React from 'react';
import { StyleSheet } from 'react-native';
import DetailsBenefitInfoView from './DetailsBenefitInfo';

const DetailsBenefitInfoContainer = props => {
  return (
    <DetailsBenefitInfoView 
      {...props} 
    />
  );
}

const styles = StyleSheet.create({
  flatlistInsets: {
    flex: 1,
  },
});

export { DetailsBenefitInfoContainer };