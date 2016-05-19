angular.module('starter.services', [])

.factory('ContactService', function () {
    var contacts = [{
        id: '1',
        first_name: 'Ione',
        last_name: 'Souza Junior',
        email: 'junior@ionixjunior.com.br'
    }, {
        id: '2', 
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
