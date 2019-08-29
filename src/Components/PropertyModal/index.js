import React, { Fragment } from 'react';

import { formatCurrency } from '../../helpers'
import BaseModal from '../BaseModal';
import CustomCarousel from '../CustomCarousel';
import PropertyInfoList from '../PropertyInfoList';
import {
  TextWrapper,
  Title,
  Price,
  PriceContainer
} from './styles'

export default ({ isOpen, closeModal, property, activePortal }) => (
  property.id ?
    <BaseModal
      isOpen={isOpen}
      closeModal={closeModal}>
      <CustomCarousel
        alt='Imagem do Imóvel'
        images={property.images}
        height={300}/>
      <TextWrapper>
        <Title activePortal={activePortal}>
          Imóvel para {property.pricingInfos.businessType === 'RENTAL' ? 'Aluguel' : 'Venda'}
        </Title>
        <PriceContainer>
          {property.pricingInfos.monthlyCondoFee && <Price>Condomínio: {formatCurrency(property.pricingInfos.monthlyCondoFee)}</Price>}
          <Price>Valor: {formatCurrency(property.pricingInfos.price)}</Price>
        </PriceContainer>
        <PropertyInfoList
          property={property}
          activePortal={activePortal}/>
      </TextWrapper>
    </BaseModal>:<Fragment/>
);
