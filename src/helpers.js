import { BOUDING_BOX_NUMBERS } from './variables'

export const getZapProperties = (properties) => 
  properties.reduce((acc, property) => {
    switch (property.pricingInfos.businessType) {
      case 'SALE':
        if (property.pricingInfos.price >= 600000 &&
            validateGeolocation(property.address.geoLocation.location) &&
            (!property.usableAreas || parseFloat(property.usableAreas) === 0 || property.pricingInfos.price / property.usableAreas > 3500)) {
          if (isBoudingBox(property.address.geoLocation.location)) {
            return [
              ...acc,
              {
                ...property,
                pricingInfos: {
                  ...property.pricingInfos,
                  price: 0.9 * property.pricingInfos.price
                }
              }
            ]
          } else {
            return [...acc, property]
          }
        } else {
          return acc;
        }
      case 'RENTAL':
        if (property.pricingInfos.rentalTotalPrice >= 3500 &&
            validateGeolocation(property.address.geoLocation.location)) {
          return [...acc, property]
        } else {
          return acc;
        }
      default:
        return acc;
    }
  }, []);

export const getVivaProperties = (properties) => 
  properties.reduce((acc, property) => {
    switch (property.pricingInfos.businessType) {
      case 'SALE':
        if (property.pricingInfos.price <= 700000 &&
            validateGeolocation(property.address.geoLocation.location)) {
          return [...acc, property]
        } else {
          return acc;
        }
      case 'RENTAL':
        if (property.pricingInfos.rentalTotalPrice <= 4000 &&
            validateGeolocation(property.address.geoLocation.location) &&
            (!property.pricingInfos.monthlyCondoFee ||
              (!isNaN(Number.parseInt(property.pricingInfos.monthlyCondoFee)) &&
              Number.parseInt(property.pricingInfos.monthlyCondoFee) < 0.3 * property.pricingInfos.rentalTotalPrice))) {
          if (isBoudingBox(property.address.geoLocation.location)) {
            const price = 1.5 * property.pricingInfos.price;
            return [
              ...acc,
              {
                ...property,
                pricingInfos: {
                  ...property.pricingInfos,
                  price,
                  rentalTotalPrice: price + property.pricingInfos.monthlyCondoFee
                }
              }
            ]
          } else {
            return [...acc, property]
          }
        } else {
          return acc;
        }
      default:
        return acc;
    }
  }, []);

export const validateGeolocation = (location) => 
  location.lat !== 0 && location.lon !== 0;
  
export const isBoudingBox = (location) => 
  location.lon >= BOUDING_BOX_NUMBERS.MIN_LON && location.lon <= BOUDING_BOX_NUMBERS.MAX_LON &&
  location.lat >= BOUDING_BOX_NUMBERS.MIN_LAT && location.lat <= BOUDING_BOX_NUMBERS.MAX_LAT;

export const formatCurrency = (value) => (
  `R$ ${parseFloat(value).toFixed(2).toString().replace('.', ',').replace(/\d(?=(\d{3})+,)/g, '$&.')}`
);