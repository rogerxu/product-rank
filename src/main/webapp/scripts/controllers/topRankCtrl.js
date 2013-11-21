'use strict';

app.controller('topRankCtrl', ['$scope', 'dataStorage', 'channel', 'dataService',
function($scope, dataStorage, channel, dataService) {

    var self = this;
    this.tab = 'top_rank';

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

            var maxLikeNum = 10000;
            _.each(products, function(product, index) {
                product.likeNum = _.random(1, 10000);
                product.percentage = product.likeNum / maxLikeNum * 100;
            });

            $scope.products = products;

            $scope.lastUpdateTime = new Date();
        });
    }

    $scope.refresh = refresh;
}]);