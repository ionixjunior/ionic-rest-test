angular.module('starter.services', [])

.factory('ContactService', function ($http, RestApiConfig) {
    var endPoint = '/contacts';

    return {
        all: function () {
            var url = RestApiConfig.url.concat(endPoint);
            return $http.get(url);
        },
        get: function (contactId) {
            var url = RestApiConfig.url.concat(endPoint).concat('/').concat(contactId);
            return $http.get(url);
        },
        post: function (data) {
            var url = RestApiConfig.url.concat(endPoint);
            return $http.post(url, data);
        },
        put: function (contactId, data) {
            var url = RestApiConfig.url.concat(endPoint).concat('/').concat(contactId);
            return $http.put(url, data);
        },
        delete: function (contactId) {
            var url = RestApiConfig.url.concat(endPoint).concat('/').concat(contactId);
            return $http.delete(url);
        }
    };
})

;
