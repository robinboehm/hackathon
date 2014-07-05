angular.module('trivagoApp')
  .factory('choicesService', function() {
    var choices = [
      {
        name: 'maindirection',
        items: [
          { name: 'city',     value: '2', image: '1-city.jpg' },
          { name: 'beach',    value: '1', image: '1-beach.jpg' },
          { name: 'mountain', value: '3', image: '1-mountains.jpg' }
        ]
      }
    ];

    // Mock Object for transition test
    var possibleChoices = [
      {
        name: 'maindirection',
        items: [
          { name: 'city',     value: '2', image: 'a1-city.jpg' },
          { name: 'beach',    value: '1', image: 'a1-beach.jpg' },
          { name: 'mountain', value: '3', image: 'a1-mountains.jpg' }
        ]
      },
      {
        name: 'art activity',
        items: [
          { name: 'party',    value: '1', image: '2-party.jpg' },
          { name: 'silence',  value: '2', image: '2-silence.jpg' },
          { name: 'sport',    value: '3', image: '2-sport.jpg' }
        ]
      },
      {
        name: 'Do you like it... ?',
        items: [
          { name: 'big',   value: '1', image: '' },
          { name: 'small', value: '2', image: '' }
        ]
      }];

    // Mock function for transition test
    function choose(value, index, level){
      // Readable maintainable
      var forward = (level+1)===choices.length;

      if(forward){
        choices.push(possibleChoices.shift());
      }
      // Step back
      else{
        possibleChoices.unshift(choices.pop());
      }
    }

    return {
      choices: choices,
      choose: function (value, index, parentIndex) {
        return choose(value, index, parentIndex);
      }
    };
  });
