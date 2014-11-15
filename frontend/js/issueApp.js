angular.module("issue_form", [])
.controller("baseCtrl", ["$scope", function($scope) {
    $scope.getData = function() {
        console.log($scope.dust_issue.base.works);
    }
}])
.controller("nestedBreaksCtrl", ["$scope", function($scope) {
    $scope.getData = function() {
        console.log($scope.dust_issue.nested.breaks);
    }
}])
.controller("nestedWorksCtrl", ["$scope", function($scope) {
    $scope.dust_issue = {};
    $scope.dust_issue.nested = {};
    $scope.getData = function() {
        console.log($scope.dust_issue.nested.works);
    }
}]);
