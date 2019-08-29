import React, { Fragment } from 'react';

import { formatCurrency } from '../../helpers'
import BaseModal from '../BaseModal';
import CustomCarousel from '../CustomCarousel';
import PropertyInfoList from '../PropertyInfoList';
import {
  TextWrapper,
  Title,
  Price
} from './styles'

export default ({ isOpen, closeModal, property, activePortal }) => (
  property.id ?
    <BaseModal
      isOpen={isOpen}
      closeModal={closeModal}>
      <CustomCarousel images={property.images} height={300}/>
      <TextWrapper>
        <Title activePortal={activePortal}>
          Imóvel para {property.pricingInfos.businessType === 'RENTAL' ? 'Aluguel' : 'Venda'}
        </Title>
        <PropertyInfoList
          property={property}
          activePortal={activePortal}/>
        <Price>Valor: {formatCurrency(property.pricingInfos.price)}</Price>
      </TextWrapper>
    </BaseModal>:<Fragment/>
);
