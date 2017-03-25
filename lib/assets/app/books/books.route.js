(function() {
    'use strict';

    angular
        .module('app.books')
        .run(appRun);

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/books/books.html',
                    controller: 'books',
                    controllerAs: 'vm',
                    title: 'books',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Books'
                    }
                }
            }
        ];
    }
})();