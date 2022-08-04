'use strict';
angular.module('shoplyApp')
  .directive('jacreditosFooter', function () {
      return {
          templateUrl: 'views/layout/jacreditos-footer.html',
          restrict: 'EA',
          link: function postLink(scope, element, attrs) {

          }
      };
  });
