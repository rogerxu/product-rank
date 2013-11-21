'use strict';

app.controller('brandCtrl', ['$scope', 'dataStorage', 'channel', 'dataService',
function($scope, dataStorage, channel, dataService) {

    var self = this;
    this.tab = 'brand';

    //--------------------------------------------------------------------------
    // subscribe
    //--------------------------------------------------------------------------

    channel.subscribe('tab_selected', function(tab) {
        if (tab !== self.tab) {
            return;
        }

        if (!$scope.products) {
            refresh();
        }
    });

    function refresh() {
        updateProducts();
    }

    function updateProducts() {
        var params = {
        };

        dataService.getTopRankProducts(params, function(data) {
            var products = data || [];
            _.each(products, function(product, index) {
                product.likeNum = _.random(1, 100);
            });

            $scope.products = products;

            $scope.lastUpdateTime = new Date();
        });
    }

    $scope.refresh = refresh;
}]);