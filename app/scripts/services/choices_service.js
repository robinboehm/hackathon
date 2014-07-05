angular.module('trivagoApp')
  .factory('choicesService', function() {
    var choices = [
      {
        name: 'Do you like it... ?',
        items: [
          { name: 'beach',    value: '1', image: '1-beach.jpg' },
          { name: 'city',     value: '2', image: '1-city.jpg' },
          { name: 'mountain', value: '3', image: '1-mountains.jpg' }
        ]
      },
      {
        name: 'Which direction... ?',
        items: [
          { name: 'left',  value: '1', image: '' },
          { name: 'right', value: '2', image: '' }
        ]
      },
      {
        name: 'Do you like it... ?',
        items: [
          { name: 'big',   value: '1', image: '' },
          { name: 'small', value: '2', image: '' }
        ]
      }
    ];

    return choices;
  });
