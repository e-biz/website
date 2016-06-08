var LinksCtrl = function ($scope) {

  $scope.redirect = function (url, $event) {
    if ($event) {
      if ($event.stopPropagation) $event.stopPropagation();
      if ($event.preventDefault) $event.preventDefault();
      $event.cancelBubble = true;
      $event.returnValue = false;
    }
    window.open(url);
  }

};

angular.module('ebizApp').controller('LinksCtrl', ['$scope', LinksCtrl]);