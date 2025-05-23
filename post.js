angular.module('blog', ['ngSanitize']);
    angular.module('blog').controller('PostagemController', function($scope, $http, $location) {
        $scope.postagem = null;

        function getIndexFromUrl() {
            var query = $location.absUrl().split('?')[1];
            if (!query) return 0;
            var params = query.split('&');
            for (var i = 0; i < params.length; i++) { // CORRIGIDO AQUI
            var pair = params[i].split('=');
            if (pair[0] === 'index') {
                return parseInt(pair[1]) || 0;
            }
            }
            return 0;
        }

        var index = getIndexFromUrl();

        $http.get('https://api-fake-blog.onrender.com/postagens')
            .then(function(response) {
            $scope.postagem = response.data[index];
            })
            .catch(function(err) {
            console.error('Erro ao carregar postagem:', err);
            });
        });
