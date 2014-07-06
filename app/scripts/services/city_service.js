angular.module('trivagoApp')
  .factory('cityService', function ($http) {
    cities = [];

    $http.get('data/places.json')
      .then(function (citiesResponse) {
         cities = citiesResponse.data;
      });

    function getCitiesFromTags(tagsArray) {
      
    }

    return {
      getCitiesFromTags: getCitiesFromTags
    }
  });