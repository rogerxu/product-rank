'use strict';

app.controller('sidebarCtrl', ['$scope', 'dataStorage', 'channel', 'dataService',
function($scope, dataStorage, channel, dataService) {

    $scope.categories = [
        {
            'id': 'coats'
        },
        {
            'id': 'blazers'
        },
        {
            'id': 'dresses'
        },
        {
            'id': 'skirts'
        },
        {
            'id': 'trousers'
        },
        {
            'id': 'jeans'
        },
        {
            'id': 'knitwear'
        },
        {
            'id': 'shirts'
        },
        {
            'id': 'tshirts'
        },
        {
            'id': 'shoes'
        },
        {
            'id': 'handbags'
        }
    ];


    function refresh() {
        updateRegions();
    }

    function updateRegions() {
        var params = {
        };

        dataService.getRegions(params, function(data) {
            var regions = data || [];

            $scope.regions = regions;
        });
    }

    function init() {
        refresh();
    }

    init();
}]);