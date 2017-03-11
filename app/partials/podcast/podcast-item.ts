module App.Podcast {

    class PodcastItem {
        public restrict: string = 'E';
        public replace: boolean = true;
        public controller: string = 'podcastItemController';
        public templateUrl: string = 'app/partials/podcast/podcast-item.html';
        public $scope: Object = {};
    }

    angular.module('app.podcast')
        .directive('podcast', () => new PodcastItem());

}