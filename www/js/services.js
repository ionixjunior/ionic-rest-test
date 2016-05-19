angular.module('starter.services', [])

.factory('ContactService', function ($http) {
    var restApiUrl = 'http://localhost:8100/api';
    var endPoint = '/contacts';

    var contacts = [{
        _id: '1',
        first_name: 'Ione',
        last_name: 'Souza Junior',
        email: 'junior@ionixjunior.com.br'
    }, {
        _id: '2',
        first_name: 'João',
        last_name: 'Silva',
        email: 'joaosilva@gmail.com'
    }];

    return {
        all: function () {
            var url = restApiUrl.concat(endPoint);
            return $http.get(url);
        },
        get: function (contactId) {
            var url = restApiUrl.concat(endPoint).concat('/').concat(contactId);
            return $http.get(url);
        },
        post: function (data) {
            var url = restApiUrl.concat(endPoint);

            $http.post(url, data);
        }
    };
})

;
