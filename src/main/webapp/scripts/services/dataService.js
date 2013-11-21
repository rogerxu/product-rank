'use strict';

app.factory('dataService', ['$http', function($http) {

    var exports;

    function getRegions(params, callback) {
        var serviceKey = "cities";
        var serviceURL = 'data/cities.json';
        var httpConfig = {};
        httpConfig.params = params;

        var deferred = $http.get(serviceURL, httpConfig).success(function(data) {
            callback && callback(data.results);
        });

        return deferred;
    }

    function getTopRankProducts(params, callback) {
        var serviceKey = "top_products";
        var serviceURL = 'data/products.json';
        var httpConfig = {};
        httpConfig.params = params;

        var deferred = $http.get(serviceURL, httpConfig).success(function(data) {
            callback && callback(data.results);
        });

        return deferred;
    }


    exports = {
        getRegions: getRegions,
        getTopRankProducts: getTopRankProducts
    };

    return exports;
}]);
