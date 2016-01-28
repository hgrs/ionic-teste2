
angular.module('app.controllers', [])
   


        .controller('loginCtrl', function($scope) {
        
        })
           
        .controller('rockCtrl', function($scope, $http) {
            
        $scope.buscaRock = function(busca2){
        // Simple GET request example:
        // 1U1dAjZnNXXozjtiTyFyFo9po8MXLMWV0aiCUBWZerwIYXMMZu
        var url = "https://api.foursquare.com/v2/venues/search?query=rock&near=sao%20paulo&oauth_token=YEP244DHKFHU1MDSL55YL20QYE33E3YYUN5MADDSG25MSYG0&v=20160127";
        
        $http.get(url).then(function successCallback(response) {
            //$scope.buscou = true;
            console.log(response.data);
            $scope.data = response.data.response.venues;
            $scope.png = ".png";
         //   $scope.imagem = response.data.response.venues.icon['prefix'] + response.data.response.venues.icon.suffix; //  junta prefix e sufix da url - cria link da imagem
  
        }, function errorCallback(response) {
            alert(JSON.stringify(response));
        });
       
        };
        
        $scope.buscaPop = function(busca2){
        // Simple GET request example:
        // 1U1dAjZnNXXozjtiTyFyFo9po8MXLMWV0aiCUBWZerwIYXMMZu
        var url = "https://api.foursquare.com/v2/venues/search?query=pop&near=sao%20paulo&oauth_token=YEP244DHKFHU1MDSL55YL20QYE33E3YYUN5MADDSG25MSYG0&v=20160127";
        
        $http.get(url).then(function successCallback(response) {
            //$scope.buscou = true;
            console.log(response.data);
            $scope.data = response.data.response.venues;
            $scope.png = ".png";
         //   $scope.imagem = response.data.response.venues.icon['prefix'] + response.data.response.venues.icon.suffix; //  junta prefix e sufix da url - cria link da imagem
  
        }, function errorCallback(response) {
            alert(JSON.stringify(response));
        });
       
        };
        
        })
           
        .controller('categoriasCtrl', function($scope) {
        
        })
           
        .controller('signupCtrl', function($scope) {
            var models = require("models");
            function populateMongo(response) {
            /* Exemplos de dados para popular o Mongo, podem colocar o de voces
            var pikachu = {
                "Nome": "Pikachu",
                "Tipo": "Eletrico",
                "Evolucoes": ["Raichu"]
            }*/
            var user = {
                "nome": $scope.nome,
                "usuario": $scope.usuario,
                "senha": $scope.senha
            }
            models.connectToMongo(response, user, models.insertDocuments);
            }
        }) 

/*


angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('rockCtrl', function($scope) {

})
   
.controller('categoriasCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

}) 

*/

