angular.module('starter.controllers', [])

.controller('ContactsCtrl', function($scope, ContactService) {
    $scope.contacts = ContactService.all();
})

.controller('ContactDetailCtrl', function($scope, $stateParams) {
    
})

;
