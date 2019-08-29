import {
  formatCurrency,
  isBoudingBox,
  validateGeolocation,
  getZapProperties,
  getVivaProperties
} from '../helpers';

const validSaleZapProperty = {
  pricingInfos: {
    price: '600000',
    businessType: 'SALE'
  },
  address: {
    geoLocation: {
      location: {
        lat: 10,
        lon: 10
      }
    }
  }  
}

const validRentalZapProperty = {
  pricingInfos: {
    rentalTotalPrice: '3500',
    businessType: 'RENTAL'
  },
  address: {
    geoLocation: {
      location: {
        lat: 10,
        lon: 10
      }
    }
  }  
}

const validSaleVivaProperty = {
  pricingInfos: {
    price: '700000',
    businessType: 'SALE'
  },
  address: {
    geoLocation: {
      location: {
        lat: 10,
        lon: 10
      }
    }
  }  
}

const validRentalVivaProperty = {
  pricingInfos: {
    rentalTotalPrice: '4000',
    businessType: 'RENTAL'
  },
  address: {
    geoLocation: {
      location: {
        lat: 10,
        lon: 10
      }
    }
  }  
}

describe('Test helpers', () => {
  it('formatCurrency should return a formated number like "R$ n.nnn,nn"', () => {
    const number = '1000000';
    const formattedNumber = 'R$ 1.000.000,00';
    expect(formatCurrency(number)).toEqual(formattedNumber);
  });

  it('isBoudingBox should return true when location is inside the bouding box', () => {
    const validLocation = {
      lat: -23.558704,
      lon: -46.653419
    };
    expect(isBoudingBox(validLocation)).toEqual(true);
  });

  it('isBoudingBox should return false when location is outside the bouding box', () => {
    const invalidLocation = {
      lat: -20.5,
      lon: -40.6
    };
    expect(isBoudingBox(invalidLocation)).toEqual(false);
  });

  it('validateGeolocation should return true when location is valid', () => {
    const validLocation = {
      lat: -23.558704,
      lon: -46.653419
    };
    expect(validateGeolocation(validLocation)).toEqual(true);
  });

  it('validateGeolocation should return false when location is invalid', () => {
    const invalidLocation = {
      lat: 0,
      lon: 0
    };
    expect(validateGeolocation(invalidLocation)).toEqual(false);
  });

  it('getZapProperties should get valid item in the list when item pass in Zap rules', () => {
    expect(getZapProperties([validSaleZapProperty])).toEqual([validSaleZapProperty]);
    expect(getZapProperties([validRentalZapProperty])).toEqual([validRentalZapProperty]);
  });

  it('getZapProperties should cheapen the price when property location is inside the boding box', () => {
    const boundProperty = {
      ...validSaleZapProperty,
      address: {
        geoLocation: {
          location: {
            lat: -23.558704,
            lon: -46.653419
          }
        }
      }
    };
    const expectedReturn = [{
      ...boundProperty,
      pricingInfos: {
        ...boundProperty.pricingInfos,
        price: 0.9 * boundProperty.pricingInfos.price
      }
    }];

    expect(getZapProperties([boundProperty])).toEqual(expectedReturn);
  });


  it('getZapProperties should not get items with invalid location', () => {
    const invalidSaleProperty ={
      ...validSaleZapProperty,
      address: {
        geoLocation: {
          location: {
            lat: 0,
            lon: 0
          }
        }
      }
    }
    const invalidRentalProperty ={
      ...validRentalZapProperty,
      address: {
        geoLocation: {
          location: {
            lat: 0,
            lon: 0
          }
        }
      }
    }

    expect(getZapProperties([invalidSaleProperty])).toEqual([]);
    expect(getZapProperties([invalidRentalProperty])).toEqual([]);
  });

  it('getZapProperties should not get items with prices incompatible', () => {
    const invalidSaleProperty ={
      ...validSaleZapProperty,
      pricingInfos: {
        ...validSaleZapProperty.pricingInfos,
        price: 100000
      }
    }
    const invalidRentalProperty ={
      ...validRentalZapProperty,
      pricingInfos: {
        ...validRentalZapProperty.pricingInfos,
        rentalTotalPrice: 1000
      }
    }

    expect(getZapProperties([invalidSaleProperty])).toEqual([]);
    expect(getZapProperties([invalidRentalProperty])).toEqual([]);
  });

  it('getZapProperties should not get items with price per square meter incompatible', () => {
    const invalidSaleProperty ={
      ...validSaleZapProperty,
      usableAreas: validSaleZapProperty.pricingInfos.price,
    }

    expect(getZapProperties([invalidSaleProperty])).toEqual([]);
  });

  it('getVivaProperties should get valid item in the list when item pass in VivaReal rules', () => {
    expect(getVivaProperties([validSaleVivaProperty])).toEqual([validSaleVivaProperty]);
    expect(getVivaProperties([validRentalVivaProperty])).toEqual([validRentalVivaProperty]);
  });

  it('getVivaProperties should make more expensive the price when property location is inside the boding box', () => {
    const boundProperty = {
      ...validRentalVivaProperty,
      pricingInfos: {
        ...validRentalVivaProperty.pricingInfos,
        monthlyCondoFee: 1
      },
      address: {
        geoLocation: {
          location: {
            lat: -23.558704,
            lon: -46.653419
          }
        }
      }
    };
    const expectedPrice =  1.5 * boundProperty.pricingInfos.price;
    const expectedReturn = [{
      ...boundProperty,
      pricingInfos: {
        ...boundProperty.pricingInfos,
        price: expectedPrice,
        rentalTotalPrice: expectedPrice + 1
      }
    }];

    expect(getVivaProperties([boundProperty])).toEqual(expectedReturn);
  });

  it('getZapProperties should not get items with invalid location', () => {
    const invalidSaleProperty ={
      ...validSaleVivaProperty,
      address: {
        geoLocation: {
          location: {
            lat: 0,
            lon: 0
          }
        }
      }
    }
    const invalidRentalProperty ={
      ...validRentalVivaProperty,
      address: {
        geoLocation: {
          location: {
            lat: 0,
            lon: 0
          }
        }
      }
    }

    expect(getVivaProperties([invalidSaleProperty])).toEqual([]);
    expect(getVivaProperties([invalidRentalProperty])).toEqual([]);
  });

  it('getVivaProperties should not get items with prices incompatible', () => {
    const invalidSaleProperty = {
      ...validSaleVivaProperty,
      pricingInfos: {
        ...validSaleZapProperty.pricingInfos,
        price: 800000
      }
    }
    const invalidRentalProperty = {
      ...validRentalVivaProperty,
      pricingInfos: {
        ...validRentalZapProperty.pricingInfos,
        rentalTotalPrice: 5000
      }
    }

    expect(getVivaProperties([invalidSaleProperty])).toEqual([]);
    expect(getVivaProperties([invalidRentalProperty])).toEqual([]);
  });

  it('getVivaProperties should not get items with monthly condo fee largest than 30% than rental total price', () => {
    const invalidRentalProperty = {
      ...validRentalVivaProperty,
      pricingInfos: {
        ...validRentalVivaProperty.pricingInfos,
        monthlyCondoFee: 200,
        rentalTotalPrice: 100
      }
    }

    expect(getVivaProperties([invalidRentalProperty])).toEqual([]);
  });
})