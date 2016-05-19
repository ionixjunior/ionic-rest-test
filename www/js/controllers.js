angular.module('starter.controllers', [])

.controller('ContactsCtrl', function($scope, $state, ContactService) {
    $scope.add = function () {
        $state.go('contact-detail');
    };

    $scope.$on('$ionicView.enter', function (event, data) {
        ContactService.all().then(function(response) {
            $scope.contacts = response.data;
        });
    });
})

.controller('ContactDetailCtrl', function($scope, $stateParams, $ionicHistory, ContactService) {
    if ($stateParams.contactId !== '') {
        ContactService.get($stateParams.contactId).then(function(response) {
            $scope.contact = response.data;
        });
    } else {
        $scope.contact = {};
    }

    $scope.save = function () {
        if ($scope.contact._id === undefined) {
          ContactService.post($scope.contact).then(function(response) {
              $ionicHistory.goBack();
          });
        } else {
            ContactService.put($scope.contact._id, $scope.contact).then(function(response) {
                $ionicHistory.goBack();
            });
        }
    };

    $scope.delete = function () {
        if ($scope.contact._id !== undefined) {
            ContactService.delete($scope.contact._id).then(function(response) {
                $ionicHistory.goBack();
            });
        }
    };
})

;
