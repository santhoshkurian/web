(function () {
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $q, $state, $timeout) {
        var vm = this;
        console.log("toolbar");
    }
})();