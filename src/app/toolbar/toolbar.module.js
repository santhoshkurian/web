(function ()
{
    'use strict';

    angular
        .module('app.toolbar', ['ui.router'])
        .config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('app/toolbar');
    }
})();