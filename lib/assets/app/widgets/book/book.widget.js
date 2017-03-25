(function(){
    'user strict';
    angular.module('app.widgets').directive('book',function(){
        return{
            restrict: 'A',
            scope:{
                'title': '@',
                'key': '@',
                'cover': '@',
                'author': '@'
            },
            templateUrl: '/app/widgets/book/book.widget.html'
        };
    });
})();