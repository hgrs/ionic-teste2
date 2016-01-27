
angular.module('app.controllers', [])
   


        .controller('loginCtrl', function($scope) {
        
        })
           
        .controller('rockCtrl', function($scope, $http) {
            
        $scope.buscaAPI = function(busca2){
        // Simple GET request example:
        // 1U1dAjZnNXXozjtiTyFyFo9po8MXLMWV0aiCUBWZerwIYXMMZu
        var url = "https://api.foursquare.com/v2/venues/search?query=rock&near=sao%20paulo&oauth_token=YEP244DHKFHU1MDSL55YL20QYE33E3YYUN5MADDSG25MSYG0&v=20160127";
        
        $http.get(url).then(function successCallback(response) {
            //$scope.buscou = true;
            console.log(response.data);
            $scope.data = response.data.response.venues;
            
            $scope.imagem = response.data.response.icon.prefix + response.data.response.icon.suffix; //  junta prefix e sufix da url - cria link da imagem
            
            
            
            
              
              
            
            
        }, function errorCallback(response) {
            alert(JSON.stringify(response));
        });
       
        
        
        };
        
        })
           
        .controller('categoriasCtrl', function($scope) {
        
        })
           
        .controller('signupCtrl', function($scope) {
        
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

