'use strict';

app.controller('contentCtrl', ['$scope', 'dataStorage', 'channel', 'dataService',
function($scope, dataStorage, channel, dataService) {

    jQuery('#tabs').find('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var link = angular.element(e.target);
        var href = link.attr('href');
        var parts = href.split('#');
        if (_.isArray(parts) && parts.length > 1) {
            var tab = parts[1];
            channel.publish('tab_selected', tab);
        }
    });
}]);