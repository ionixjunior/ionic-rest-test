angular.module('starter.services', [])

.factory('ContactService', function () {
    var contacts = [{
        first_name: 'Ione',
        last_name: 'Souza Junior',
        email: 'junior@ionixjunior.com.br'
    }, {
        first_name: 'João',
        last_name: 'Silva',
        email: 'joaosilva@gmail.com'
    }];

    return {
        all: function () {
            return contacts;
        }
    };
})

;
