angular.module('blog', [])
.controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
      $scope.publicacoes = response.data;
    });

  // Filtro correto para posts com imagem
  $scope.temImagem = function(post) {
    return post.thumbImage && post.thumbImage.length > 0;
  };
});