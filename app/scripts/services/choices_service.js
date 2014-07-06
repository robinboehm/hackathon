angular.module('trivagoApp')
  .factory('choicesService', function ($http) {

    var choices = [];
    var possibleChoices = {};
    var selectedChoices = [];
    var tags = [];

    var stepOrder = [
      'general',
      'climate',
      'activityType',
      'activity'
      ];

    $http.get('data/places.json')
      .then(function (response) {
        // Array -> Object- Map
        angular.forEach(response.data, function (element) {
          if (angular.isUndefined(possibleChoices[element.key[0]])) {
            possibleChoices[element.key[0]] = [];
          }
          possibleChoices[element.key[0]].push(element);
        });

        // Init Category
        goToStep(0);
      });


    function goToStep(step) {
      choices.length = 0;

      var tempTags = selectedChoices.map(function(choice) {
        return choice.key[2];
      });
      tempTags = tempTags.concat.apply([], tempTags);
      
      tags.length = 0;
      tags.push.apply(tags, tempTags);

      for (var i = 0; i <= step; i++) {
        if(stepOrder.length <= i) {
          $("html, body").animate({scrollTop: $(".startpage").height()+((5)*350)-$(window).height()}, '300');
          break;
        }
        if (angular.isDefined(stepOrder[i])) {
          var filteredChoices = possibleChoices[stepOrder[i]].filter(function(choice) {
            var excludeTags = choice.key[3] || [];

            if(excludeTags.length === 0) {
              return true;
            }

            var isExcluded = tags.some(function(tag) {
              return excludeTags.some(function(excludeTag) {
                return excludeTag === tag;
              });
            });
            return !isExcluded;
          });
          if(filteredChoices.length > 0) {
            console.log(filteredChoices);
            choices.push(filteredChoices);
          } else {
            // load city
            // console.log('load city')
          }
        }
      }
    }

    function processValue(value){
      console.log(value);
    }

    function selectChoice(value, step) {
      selectedChoices.splice(step-1,choices.length);
      selectedChoices.push(value);
    }

    // Mock function for transition test
    function choose(value, step) {
      processValue(value);
      goToStep(step);
      selectChoice(value, step);
    }

    return {
      choices: choices,
      selectedChoices: selectedChoices,
      tags: tags,
      choose: function (value, parentIndex) {
        return choose(value, parentIndex);
      }
    };
  });
