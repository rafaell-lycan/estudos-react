'use strict';

module.exports = {
  // Load Mock Product Data Into localStorage
  load: function() {
    return [
      {
        id : '00001',
        sku: 123456,
        name: 'Brooklyn Lager',
        image: 'http://images.meredith.com/rrmag/images/2012/05/ss_BK-Lager.jpg',
        price: 10.99,
        inventory: 6
      },
      {
        id : '00002',
        sku: 123234,
        name: 'Abita Purple Haze',
        image: 'http://images.meredith.com/rrmag/images/2012/05/ss_Abita-Purple-Haze.jpg',
        price: 7.99,
        inventory: 2
      },
      {
        id : '00003',
        sku: 1236789,
        name: 'Miller High Life',
        image: 'http://images.meredith.com/rrmag/images/2012/05/ss_Miller.jpg',
        price: 4.89,
        inventory: 12
      },
      {
        id : '00004',
        sku: 2346430,
        name: 'Samuel Adams Boston Lager',
        image: 'http://images.meredith.com/rrmag/images/2012/05/ss_Sam-Adams.jpg',
        price: 6.99,
        inventory: 4
      },
    ]
  }
};