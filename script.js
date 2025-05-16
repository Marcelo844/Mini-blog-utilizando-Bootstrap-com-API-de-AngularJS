angular.module('blog', [])
.controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
      $scope.publicacao = response.data[0]; // apenas o item 0
    });
});
