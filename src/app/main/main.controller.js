(function ()
{
    'use strict';

    angular
        .module('matrimony')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $rootScope)
    {
        console.log("test print")
        // Data

        //////////

        // Remove the splash screen
        //$scope.$on('$viewContentAnimationEnded', function (event)
        //{
        //    if ( event.targetScope.$id === $scope.$id )
        //    {
        //        $rootScope.$broadcast('msSplashScreen::remove');
        //    }
        //});
    }
})();