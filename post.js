    angular.module('blog', [])
    .controller('PostagemController', function($scope, $http, $location) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get('id') || '1';

      $http.get('https://api-fake-blog.onrender.com/postagem/' + id)
        .then(function(response) {
          $scope.postagem = response.data;
        });
    });