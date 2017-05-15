var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS jishnu ========================================
        .state('home', {
            url: '/home',
            views: {
                //'header@': {
                //    templateUrl: 'header.html'
                //},
                //'navbar@': {
                //    templateUrl: 'partial-home.html'
                //},
                'content@': {
                    templateUrl: 'dashboard.html'
                }
            }
        })
        .state('login', {
            url: '/login',
            views: {
                //'header@': {
                //    templateUrl: 'header.html'
                //},
                //'navbar@': {
                //    templateUrl: 'partial-home.html'
                //},
                'content@': {
                    templateUrl: 'login.html'
                }
            }
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            views: {
                'content@home': {
                    templateUrl: 'content2.html'
                }
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': {templateUrl: 'partial-about.html'},
                'columnOne@about': {template: 'Look I am a column!'},
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        });

});

routerApp.controller('scotchController', function ($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});
