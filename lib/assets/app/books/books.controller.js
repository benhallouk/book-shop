(function(){
    'use strict';
    angular.module('app.books').controller('books',function(dataService){
        var vm = this;
        vm.keyword = "";
                
        dataService.getBooks().then(function(data){
            vm.data = data;
        });

        vm.search = function(){
            if(vm.keyword){
                dataService.search(vm.keyword).then(function(data){
                    vm.data = data;
                });
            }
            else{
                dataService.getBooks().then(function(data){
                    vm.data = data;
                });
            }         
        };
    });
})();