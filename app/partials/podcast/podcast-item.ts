module App {

    angular.module('app.podcast')
        .directive('podcast', function podcastItem() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'app/partials/podcast/podcast-item.html',
                controller: 'podcastItemController'
            };
        });

}