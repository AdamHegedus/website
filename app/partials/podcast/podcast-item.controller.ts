module App.Podcast {

    interface IPodcastItemControllerScope extends ng.IScope {
        podcasts: Array<IPodcastItem>;
    }

    interface IPodcastItem {
        id: number;
        artist: string;
        title: string;
        timestamp: number;
    }

    class PodcastItemController {
        public static $inject: Array<string> = ['$scope'];

        constructor ($scope: IPodcastItemControllerScope) {
            $scope.podcasts = [
                {
                    id: 1,
                    artist: 'Artist',
                    title: 'Song',
                    timestamp: 404
                }, {
                    id: 2,
                    artist: 'Artist',
                    title: 'Song (Remix)',
                    timestamp: 404
                }, {
                    id: 3,
                    artist: 'Artist & Artist',
                    title: 'Song (Remix)',
                    timestamp: 404
                }, {
                    id: 4,
                    artist: 'Artist',
                    title: 'Song',
                    timestamp: 999999
                }
            ];
        }
    }

    angular.module('app.podcast').controller('podcastItemController', PodcastItemController);
}