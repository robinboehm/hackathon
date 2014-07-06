angular.module('trivagoApp')
  .factory('cityService', function ($http) {
    cities = [];

    $http.get('data/cities.json')
      .then(function (citiesResponse) {
         cities = citiesResponse.data;
      });

    function getCitiesFromTags(tagsArray, limit) {
      var result = cities.filter(function(city){
        return tagsArray.every(function(tag) { return city.tags.indexOf(tag) !== -1 });
      });
      if (limit && result.length > limit) { result.length = limit; }
      return result;
    }

    return {
      getCitiesFromTags: getCitiesFromTags
    }
  });

