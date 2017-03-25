(function(){
    'use strict';
    angular.module('app.core').service('dataService',function($http, $q){
        var isOLID= function(keyword)
        {
            return keyword.search(/OL[0-9]*M/)==0;
        };
        return {
            getBooks: function(){
                return $http.get('/api/books').then(function (response) {
                        return response.data;
                })
                .catch(function(message) {
                        console.error(message);
                });
            },
            search: function(keyword){
                var url = isOLID(keyword) ? ('/api/books/'+keyword) : ('/api/books?title='+keyword);               
                return $http.get(url).then(function (response) {
                        return response.data;
                })
                .catch(function(message) {
                        console.error(message);
                });              
            }
        };
    });
})();