
angular.module('app.controllers', [])
   


        .controller('loginCtrl', function($scope) {
        
        })
           
        .controller('rockCtrl', function($scope, $http) {
            
        $scope.buscaAPI = function(busca2){
        // Simple GET request example:
        // 1U1dAjZnNXXozjtiTyFyFo9po8MXLMWV0aiCUBWZerwIYXMMZu
        var url = "https://api.tumblr.com/v2/tagged?tag=rock&api_key=1U1dAjZnNXXozjtiTyFyFo9po8MXLMWV0aiCUBWZerwIYXMMZu";
        var resto_da_url = "?api_key=";
        $http.get(url).then(function successCallback(response) {
            //$scope.buscou = true;
            console.log(response.data);
            $scope.data = response.data;
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

