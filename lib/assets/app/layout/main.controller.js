(function(){
'use strict';

    angular.module('app.layout').controller('main',function($timeout,dataService){
        var vm = this;
        vm.showSplash = true;

        $timeout(function(){
            vm.showSplash = false;
        },1000);
    });

})();