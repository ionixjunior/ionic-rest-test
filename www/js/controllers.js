angular.module('starter.controllers', [])

.controller('ContactsCtrl', function($scope, ContactService) {
    $scope.$on('$ionicView.enter', function (event, data) {
        ContactService.all().then(function(response) {
            $scope.contacts = response.data;
        });
    });
})

.controller('ContactDetailCtrl', function($scope, $stateParams, $ionicHistory, ContactService) {
    ContactService.get($stateParams.contactId).then(function(response) {
        $scope.contact = response.data;
    });

    $scope.save = function () {
        ContactService.put($scope.contact._id, $scope.contact).then(function(response) {
            $ionicHistory.goBack();
        });
    };
})

;
