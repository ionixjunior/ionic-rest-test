angular.module('starter.controllers', [])

.controller('ContactsCtrl', function($scope, ContactService) {
    ContactService.all().then(function(response) {
        $scope.contacts = response.data;
    });
})

.controller('ContactDetailCtrl', function($scope, $stateParams, ContactService) {
    ContactService.get($stateParams.contactId).then(function(response) {
        $scope.contact = response.data;
    });
})

;
