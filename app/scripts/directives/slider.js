'use strict';

angular.module('shoplyApp')
  .directive('slider', function ($rootScope, $timeout) {
    return {
      replace:true,
      template: '<div class="slider"><div/>',
      restrict: 'EA',
      scope : {
      	range : "=",
        initial :"@",
        instance  : "=",
        custom  : "=",
        ngModel:"=",
        step:"@"
      },

      link: function postLink(scope, element, attrs) {
        $timeout(function(){
            var min, max;
            try {
              if($rootScope.user.custom && scope.custom){
                min = 1;
                max = 365;
              }else{
                min = scope.range[0];
                max = scope.range[1]
              }
  
            } catch (error) {
              min = scope.range[0];
              max = scope.range[1]
            }

            var _slider = noUiSlider.create( angular.element(element)[0], {
                start: parseInt(scope.initial),
                connect: [true,false],
                step: parseInt(scope.step),
                range: {
                    min: min,
                    max: max
                }
            });
  
            scope.instance = _slider;
            
            _slider.on('update', function(values, handle){
                $timeout(function(){
                  scope.ngModel = values.map(function(val){
                    return Math.round(val);
                  })              
                });
            }); 
        }, 1000);
      }
    };
  });