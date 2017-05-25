(function () {
    'use strict';

    angular
        .module('matrimony')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/login');

        var layouts = {
            external: {
                main      : 'app/core/layouts/common.html',
                toolbar   : 'app/toolbar/layouts/external/toolbar.html'
                //navigation: 'app/navigation/layouts/horizontal-navigation/navigation.html'
            }
            //internal: {
            //    main      : 'app/core/layouts/common.html',
            //    toolbar   : 'app/toolbar/layouts/external/toolbar.html'
            //},
            //contentOnly         : {
            //    main      : 'app/core/layouts/content-only.html',
            //    toolbar   : '',
            //    navigation: ''
            //},
            //contentWithToolbar  : {
            //    main      : 'app/core/layouts/content-with-toolbar.html',
            //    toolbar   : 'app/toolbar/layouts/content-with-toolbar/toolbar.html',
            //    navigation: ''
            //}
        };

        // State definitions
        $stateProvider
            .state('app', {
                //abstract: true,
                url: "/",
                views   : {
                    'main@'         : {
                        templateUrl: layouts.external.main,
                        controller : 'MainController as vm'
                    },
                    'toolbar@app'   : {
                        templateUrl: layouts.external.toolbar,
                        controller : 'ToolbarController as vm'
                    }
                    //'navigation@app': {
                    //    templateUrl: layouts[layoutStyle].navigation,
                    //    controller : 'NavigationController as vm'
                    //}
                }
            });

    }

})();
