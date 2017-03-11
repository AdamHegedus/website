
module App {

    angular.module('app.podcast', []);

    let app = angular.module('app', ['ui.router', 'app.podcast']);

    app.config([
        '$stateProvider',
        '$urlRouterProvider',
        ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider): void => {
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'app/partials/home/home.html'
            }).state('about', {
                url: '/about',
                templateUrl: 'app/partials/about/about.html'
            }).state('contact', {
                url: '/contact',
                templateUrl: 'app/partials/contact/contact.html'
            }).state('podcast', {
                url: '/podcast',
                templateUrl: 'app/partials/podcast/podcast.html'
            }).state('kitchen-sink', {
                url: '/kitchen-sink',
                templateUrl: 'app/partials/kitchen-sink/kitchen-sink.html'
            });

            $urlRouterProvider.otherwise('/home');
    }]);
}


