angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, $state) {
$state.go($state.current, {}, {reload: true});

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('hotDishesCtrl', function($scope, $http,$ionicPopup) {

    // $scope.dates = new Date();
            $scope.tableid ="2";

			$http.post('http://52.37.86.98/services/soapService.asmx/getAllDishToAPP')
            .then(function (response){
            $scope.hotdishes = response.data;
              
      });

            

       $scope.addorder = function(foodname){

        var isDone = "0";
        var date2 = document.getElementById("getDate").value;
        var MobileID = document.getElementById("MobileID").value;
        var TBLid = document.getElementById("TBLid").value;

       //window.alert(date2);
        
        var link = 'http://52.37.86.98/services/soapservice.asmx/addOrder?foodname='+foodname+'&date='+date2+'&tableid='+TBLid+'&isDone='+isDone+'&umobile='+MobileID;

        $http.get(link).then(function (res){
            $scope.response = res.data;

            var alert = $ionicPopup.alert({
                title: 'Ordered successfully!',
                template: 'Dish ordered'

            })

            
        });

    };




})



.controller('pastOrders', function($scope, $http,$ionicPopup,$state) {
$state.go($state.current, {}, {reload: true});

    // $scope.dates = new Date();
    $scope.date = new Date();

      

        $scope.tableid ="2";
        

        $scope.getum = function(){

            window.localStorage.setItem("date",$scope.date);
            
            var MobileID = window.localStorage.getItem("mobile");
            var da = window.localStorage.getItem("dats");
            
           
            var linkT = 'http://52.37.86.98/services/soapservice.asmx/pastOreders?mobile='+MobileID+'&date='+da;
       
        $http.get(linkT).then(function (res){
            $scope.pastOrdersss = res.data;


        });    

        };


         $scope.addorder = function(foodname){

        var isDone = "0";
        var date2 = document.getElementById("getDate").value;
        var MobileID = document.getElementById("MobileID").value;
        var TBLid = document.getElementById("TBLid").value;

       window.alert(date2);
        
        var link = 'http://52.37.86.98/services/soapservice.asmx/addOrder?foodname='+foodname+'&date='+date2+'&tableid='+TBLid+'&isDone='+isDone+'&umobile='+MobileID;

        $http.get(link).then(function (res){
            $scope.response = res.data;

            var alert = $ionicPopup.alert({
                title: 'Ordered successfully!',
                template: 'Food item reordered'

            })

            
        });

    };
            

})
      
.controller('menuListCtrl', function($scope, $http) {

	        $http.post('http://52.37.86.98/services/soapService.asmx/getTest')
            .then(function (response){
            $scope.employees = response.data;

             $scope.doRefresh = function() {
   
 };
              
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
   
.controller('feedbackCtrl', function($scope,$http,$ionicPopup) {

$scope.getselectvalue = function(){
var a=document.getElementById("feedbacktype").value;

                
            window.localStorage.setItem("a", a);


}


 $scope.addfeedback = function(feedback){

    	
        var link = 'http://52.37.86.98/services/soapService.asmx/addFeedback';

        $http.post(link, {feedbackAuthor : window.localStorage.getItem("a"),feedbackMsg : feedback }).then(function (resp){
            $scope.response = resp.data;
        });

        var alert = $ionicPopup.alert({
            	title: 'Feedback added successfully!',
            	template: ''

            })
    };

    

})
   
.controller('login2Ctrl', function($scope,$http,$ionicPopup,$state,$window) {


   $scope.submit = function(name,mobile){

        var uname;//=document.getElementById("uname").value;
        var umobile;//=document.getElementById("umobile").value;
        


        $scope.isValid;

         $http.post('http://52.37.86.98/services/soapservice.asmx/getAllUsersToAPP')
            .then(function (response){

            $scope.employees = response.data;

                for (var i = 0; i < $scope.employees.length; i++) {
                    
                     $scope.chkname = $scope.employees[i].uname;
                     $scope.chkmobile = $scope.employees[i].umobile;

                     //window.alert(name +"!="+ $scope.chkname +"&&"+ mobile +"!="+ $scope.chkmobile);

                        if($scope.chkname == name && $scope.chkmobile == mobile){

                                
                                $scope.isValid = "true";
                                
                                uname = $scope.chkname;
                                umobile = $scope.chkmobile;

                                break;

                        }else{

                                
                                $scope.isValid = "false";   

                                uname = "";
                                umobile = "";

                        }


                };

                
                    if($scope.isValid == "true"){

                        window.localStorage.setItem("name",uname);
                        window.localStorage.setItem("mobile",umobile);
                        window.localStorage.setItem("text","false");

            //                 var alert = $ionicPopup.alert({
            //                title: 'Successfully logged in',
            //                template: ''

            // })
                        // $window.location.href = '/side-menu21/page1'
                         // $location.path("/side-menu21/page1");
                         
                          $state.go('menu.home');
                          $window.location.reload(true);
                        

                    }else{

                        window.localStorage.setItem("name",uname);
                        window.localStorage.setItem("mobile",umobile);
                        window.localStorage.setItem("text","true");
                        $window.location.reload(true);
                        var alert = $ionicPopup.alert({
                title: 'Invalid User!',
                template: 'Please check credentials and try again'

            })
                        $window.location.reload(true);


                    }


            });
    };


       



})

.controller('getDetail',function($scope,$http,$ionicPopup){

    $scope.date = new Date();
    $scope.ttt = "true";
    $scope.uname = "";

    $scope.uname = window.localStorage.getItem("name");
    $scope.umobile = window.localStorage.getItem("mobile");
    $scope.ttt = window.localStorage.getItem("text");

    $scope.datew = document.getElementById("getDate").value;

    window.localStorage.setItem("dats", $scope.datew);

    //window.alert($scope.ttt);

    if($scope.ttt == "false"){

         $scope.listshow = false;
         $scope.Cardshow = true;
         $scope.hotDishshow = true;
    }
    else{

        $scope.listshow = true;
        $scope.Cardshow = false;
        $scope.hotDishshow = false;
    }



        $scope.getD = function(mobile){

       
        var link = 'http://52.37.86.98/services/soapservice.asmx/GetUser?mobile='+mobile;

        $http.get(link).then(function (res){
            $scope.users = res.data;

            $scope.unamep=$scope.users[0].uname;
             $scope.lname=$scope.users[0].lname;
             $scope.email=$scope.users[0].email;
             $scope.locationt=$scope.users[0].locationt;


             $scope.gen=$scope.users[0].gender;
            
            
        });
        

    };

$scope.getselectvalue = function(){
var a=document.getElementById("gender").value;

                
            window.localStorage.setItem("a", a);


}

    $scope.save = function(uname,lname, umobile, email, locationt){


        
        var link = 'http://52.37.86.98/services/soapservice.asmx/updateUser?uname='+uname+'&lname='+lname+'&umobile='+umobile+'&gender='+window.localStorage.getItem("a")+'&email='+email+'&locationt='+locationt;

        $http.get(link).then(function (res){
            $scope.response = res.data;

            var alert = $ionicPopup.alert({
                title: 'Updated successfully!',
                template: 'Profile info updated'

            })

            
        });

    };
    

})
 

.controller('signupCtrl', function($scope , $http, $ionicPopup) {


    $scope.submit = function(uname,umobile){

    	
    	//console.log(unamep);
    	//console.log(namemm);
        var link = 'http://52.37.86.98/services/soapService.asmx/AddUser';

        $http.post(link, {uname : uname, umobile :umobile}).then(function (res){
            $scope.response = res.data;

            var alert = $ionicPopup.alert({
            	title: 'Registered successfully!',
            	template: 'Please login with the new details'

            })

            
        });

    };


})


   
.controller('editProfileCtrl', function($scope) {
    
    



})
   
.controller('myAccountCtrl', function($scope) {

})

.controller('aboutCtrl', function($scope) {

})

.controller('pastOrdersCtrl', function($scope) {

})

.controller('foodItemCtrl', function($scope, $http,$location,$ionicPopup,$state) {
// $state.go($state.current, {}, {reload: true});
       $scope.date = new Date();
       
       //$scope.filDate = date | date
        

       var foods = {};
        //var loc = location.se
        var absUrl = $location.absUrl().split('/')[6];
       
        var link = 'http://52.37.86.98/services/soapService.asmx/GetFoodAllToAppByCatID?catID='+absUrl;

        $http.get(link).then(function (res){
            $scope.foods = res.data;

            
            
        });
        
        $scope.tableid ="2";

       $scope.addorder = function(foodname){

        var isDone = "0";
        var date2 = document.getElementById("getDate").value;
        var MobileID = document.getElementById("MobileID").value;
        var TBLid = document.getElementById("TBLid").value;

       
        
        var link = 'http://52.37.86.98/services/soapservice.asmx/addOrder?foodname='+foodname+'&date='+date2+'&tableid='+TBLid+'&isDone='+isDone+'&umobile='+MobileID;

        $http.get(link).then(function (res){
            $scope.response = res.data;

            var alert = $ionicPopup.alert({
                title: 'Ordered successfully!',
                template: 'Food item ordered'

            })

            
        });

    };

})


.controller('pizzaCtrl', function($scope,$http,$ionicPopup) {


var value1=0;
var value2=0;
var value3=0;
var value4=0;
$scope.getselectvalue = function(){
var a=document.getElementById("size").value;

                var formaddress = a.split(/q/);
                formaddress[0];  //from
                value1=formaddress[1];  //FROM ROOT ID
            window.localStorage.setItem("a", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));

}

$scope.getselectvalue1 = function(){

var b=document.getElementById("toppp1").value;
                var formaddress = b.split(/q/);
                formaddress[0];  //from
                value2=formaddress[1];  //FROM ROOT ID  

window.localStorage.setItem("b", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));
}

$scope.getselectvalue2 = function(){




var c=document.getElementById("toppp2").value;
                var formaddress = c.split(/q/);
                formaddress[0];  //from
                value3=formaddress[1];  //FROM ROOT ID  
window.localStorage.setItem("c", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));
}

$scope.getselectvalue3 = function(){


var d=document.getElementById("extraaa").value;
                var formaddress = d.split(/q/);
                formaddress[0];  //from
                value4=formaddress[1];  //FROM ROOT ID
window.localStorage.setItem("d", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));
}

$scope.getselectvalue4 = function(){


var e=document.getElementById("quantitiy").value;

window.localStorage.setItem("total", e);
var mulit= parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);

document.getElementById("iddof").value=parseInt(mulit)*parseInt(e);

window.localStorage.setItem("e", parseInt(mulit)*parseInt(e));
window.localStorage.setItem("f", e);
}




$scope.submit = function(size,top1,top2,dataextra,qun){


    if(size == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Size',
     
   });
     //alert("Please select Size");
    }
    else if(top1 == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Topping1',
     
   });
    
     //alert("Please select Topping1");
    }else if(top2 == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Topping2',
     
   });
    
     //alert("Please select Topping2");
    }
    else if(dataextra == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Extra',
     
   });}
    else if(qun == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Quantity',
     
   });
    
     //alert("Please select Quantity");
    }


    else{

var confirmPopup = $ionicPopup.confirm({
     title: 'Do you want to add Order?',
     
   });
        
    var date = "2016-03-31";
    var isFinish = "0";
    var table = "2";
        
        var link = 'http://52.37.86.98/services/soapservice.asmx/AddcuztomzOrder?sizetype='+window.localStorage.getItem("a")+'&topping1='+window.localStorage.getItem("b")+'&topping2='+window.localStorage.getItem("c")+'&extra='+window.localStorage.getItem("d")+'&total='+window.localStorage.getItem("e")+'&quantity='+window.localStorage.getItem("f")+'&date='+date+'&isFinished='+parseInt(isFinish)+'&tableID='+table;

        $http.get(link).then(function (res){
            $scope.response = res.data;

            
            
        });

        $scope.datasize="";
    $scope.datatop1="";
    $scope.datatop2="";
    $scope.dataextra="";
    $scope.dataextra4="";
    $scope.tot="";
};
    };

    $scope.sizee=window.localStorage.getItem("a");
$scope.topp1=window.localStorage.getItem("b");
$scope.topp2=window.localStorage.getItem("c");
$scope.extraa=window.localStorage.getItem("d");
$scope.total=window.localStorage.getItem("e");
$scope.quan=window.localStorage.getItem("f");



})

.controller('pastaCtrl', function($scope,$http) {

var value1=0;
var value2=0;
var value3=0;
var value4=0;
$scope.getselectvalue = function(){
var a=document.getElementById("size").value;

                var formaddress = a.split(/q/);
                formaddress[0];  //from
                value1=formaddress[1];  //FROM ROOT ID
            window.localStorage.setItem("a", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));

}

$scope.getselectvalue1 = function(){

var b=document.getElementById("toppp1").value;
                var formaddress = b.split(/q/);
                formaddress[0];  //from
                value2=formaddress[1];  //FROM ROOT ID  

window.localStorage.setItem("b", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));
}

$scope.getselectvalue2 = function(){




var c=document.getElementById("toppp2").value;
                var formaddress = c.split(/q/);
                formaddress[0];  //from
                value3=formaddress[1];  //FROM ROOT ID  
window.localStorage.setItem("c", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));
}

$scope.getselectvalue3 = function(){


var d=document.getElementById("extraaa").value;
                var formaddress = d.split(/q/);
                formaddress[0];  //from
                value4=formaddress[1];  //FROM ROOT ID
window.localStorage.setItem("d", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));
}


$scope.getselectvalue4 = function(){


var e=document.getElementById("quantitiy").value;

window.localStorage.setItem("total", e);
var mulit= parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);

document.getElementById("iddof").value=parseInt(mulit)*parseInt(e);

window.localStorage.setItem("e", parseInt(mulit)*parseInt(e));
window.localStorage.setItem("f", e);
}




$scope.submit = function(size,top1,top2,dataextra,qun){

    if(size == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Size',
     
   });
     //alert("Please select Size");
    }
    else if(top1 == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Topping1',
     
   });
    
     //alert("Please select Topping1");
    }else if(top2 == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Topping2',
     
   });
    
     //alert("Please select Topping2");
    }
    else if(dataextra == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Extra',
     
   });}
    else if(qun == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Quantity',
     
   });
    
     //alert("Please select Quantity");
    }


    else{

var confirmPopup = $ionicPopup.confirm({
     title: 'Do you want to add Order?',
     
   });
        
    var date = "2016-03-31";
    var isFinish = "0";
    var table = "2";
        
        var link = 'http://52.37.86.98/services/soapservice.asmx/AddcuztomzOrder?sizetype='+window.localStorage.getItem("a")+'&topping1='+window.localStorage.getItem("b")+'&topping2='+window.localStorage.getItem("c")+'&extra='+window.localStorage.getItem("d")+'&total='+window.localStorage.getItem("e")+'&quantity='+window.localStorage.getItem("f")+'&date='+date+'&isFinished='+parseInt(isFinish)+'&tableID='+table;

        $http.get(link).then(function (res){
            $scope.response = res.data;

    
            
        });

          $scope.datasize="";
    $scope.datatop1="";
    $scope.datatop2="";
    $scope.dataextra="";
    $scope.dataextra4="";
    $scope.tot="";
};
    };

    $scope.sizee=window.localStorage.getItem("a");
$scope.topp1=window.localStorage.getItem("b");
$scope.topp2=window.localStorage.getItem("c");
$scope.extraa=window.localStorage.getItem("d");
$scope.total=window.localStorage.getItem("e");
$scope.quan=window.localStorage.getItem("f");

})



.controller('submarineCtrl', function($scope,$http,$ionicPopup) {

       var value1=0;
var value2=0;
var value3=0;
var value4=0;
$scope.getselectvalue = function(){
var a=document.getElementById("size").value;

                var formaddress = a.split(/q/);
                formaddress[0];  //from
                value1=formaddress[1];  //FROM ROOT ID
            window.localStorage.setItem("a", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));

}

$scope.getselectvalue1 = function(){

var b=document.getElementById("toppp1").value;
                var formaddress = b.split(/q/);
                formaddress[0];  //from
                value2=formaddress[1];  //FROM ROOT ID  

window.localStorage.setItem("b", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));
}

$scope.getselectvalue2 = function(){




var c=document.getElementById("toppp2").value;
                var formaddress = c.split(/q/);
                formaddress[0];  //from
                value3=formaddress[1];  //FROM ROOT ID  
window.localStorage.setItem("c", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));
}

$scope.getselectvalue3 = function(){


var d=document.getElementById("extraaa").value;
                var formaddress = d.split(/q/);
                formaddress[0];  //from
                value4=formaddress[1];  //FROM ROOT ID
window.localStorage.setItem("d", formaddress[0]);
document.getElementById("iddof").value=parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);
window.localStorage.setItem("e", parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4));
}


$scope.getselectvalue4 = function(){


var e=document.getElementById("quantitiy").value;

window.localStorage.setItem("total", e);
var mulit= parseInt(value1)+parseInt(value2)+parseInt(value3)+parseInt(value4);

document.getElementById("iddof").value=parseInt(mulit)*parseInt(e);

window.localStorage.setItem("e", parseInt(mulit)*parseInt(e));
window.localStorage.setItem("f", e);
}




$scope.submit = function(size,top1,top2,dataextra,qun){

    if(size == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Size',
     
   });
     //alert("Please select Size");
    }
    else if(top1 == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Topping1',
     
   });
    
     //alert("Please select Topping1");
    }else if(top2 == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Topping2',
     
   });
    
     //alert("Please select Topping2");
    }
    else if(dataextra == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Extra',
     
   });}
    else if(qun == null){
    var alertPopup = $ionicPopup.alert({
     title: 'Please select Quantity',
     
   });
    
     //alert("Please select Quantity");
    }


    else{

var confirmPopup = $ionicPopup.confirm({
     title: 'Do you want to add Order?',
     
   });
    var date = "2016-03-31";
    var isFinish = "0";
    var table = "2";
        
        var link = 'http://52.37.86.98/services/soapservice.asmx/AddcuztomzOrder?sizetype='+window.localStorage.getItem("a")+'&topping1='+window.localStorage.getItem("b")+'&topping2='+window.localStorage.getItem("c")+'&extra='+window.localStorage.getItem("d")+'&total='+window.localStorage.getItem("e")+'&quantity='+window.localStorage.getItem("f")+'&date='+date+'&isFinished='+parseInt(isFinish)+'&tableID='+table;

        $http.get(link).then(function (res){
            $scope.response = res.data;

           
            
        });

$scope.datasize="";
    $scope.datatop1="";
    $scope.datatop2="";
    $scope.dataextra="";
    $scope.dataextra4="";
    $scope.tot="";

};
    };

    $scope.sizee=window.localStorage.getItem("a");
$scope.topp1=window.localStorage.getItem("b");
$scope.topp2=window.localStorage.getItem("c");
$scope.extraa=window.localStorage.getItem("d");
$scope.total=window.localStorage.getItem("e");
$scope.quan=window.localStorage.getItem("f");

})