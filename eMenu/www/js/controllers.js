angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('hotDishesCtrl', function($scope, $http) {

			$http.post('http://52.36.8.68/services/soapService.asmx/getAllDishToAPP')
            .then(function (response){
            $scope.hotdishes = response.data;
              
      });

})
      
.controller('menuListCtrl', function($scope, $http) {

	        $http.post('http://52.36.8.68/services/soapService.asmx/getTest')
            .then(function (response){
            $scope.employees = response.data;
              
      });

})
   
.controller('customizeDishesCtrl', function($scope) {

})
   
.controller('myOrdersCtrl', function($scope) {

})
   
.controller('myFavoritesCtrl', function($scope) {

})
   
.controller('callWaiterCtrl', function($scope) {

})
   
.controller('feedbackCtrl', function($scope) {

})
   
.controller('login2Ctrl', function($scope) {

})
 

.controller('signupCtrl', function($scope, $http ) {





})
   
.controller('editProfileCtrl', function($scope) {

})
   
.controller('myAccountCtrl', function($scope) {

})

.controller('aboutCtrl', function($scope) {

})

.controller('pastOrdersCtrl', function($scope) {

})

.controller('foodItemCtrl', function($scope, $http) {

	        $http.post('http://localhost:1047/services/soapservice.asmx/GetFoodAllToApp')
            .then(function (response){
            $scope.foodItems = response.data;
              
      });

})