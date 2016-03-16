angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.hotDishes', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hotDishes.html',
        controller: 'hotDishesCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.menuList', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menuList.html',
        controller: 'menuListCtrl'
      }
    }
  })

  .state('menu.customizeDishes', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/customizeDishes.html',
        controller: 'customizeDishesCtrl'
      }
    }
  })

  .state('myOrders', {
    url: '/page6',
    templateUrl: 'templates/myOrders.html',
    controller: 'myOrdersCtrl'
  })

  .state('myFavorites', {
    url: '/page7',
    templateUrl: 'templates/myFavorites.html',
    controller: 'myFavoritesCtrl'
  })

  .state('menu.callWaiter', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/callWaiter.html',
        controller: 'callWaiterCtrl'
      }
    }
  })

  .state('menu.feedback', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/feedback.html',
        controller: 'feedbackCtrl'
      }
    }
  })

  .state('menu.login2', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login2.html',
        controller: 'login2Ctrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.editProfile', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('menu.myAccount', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myAccount.html',
        controller: 'myAccountCtrl'
      }
    }
  })

    .state('menu.about', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

   .state('menu.pastOrders', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pastOrders.html',
        controller: 'pastOrdersCtrl'
      }
    }
  })   

      .state('menu.hotDishView', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hotDishView.html',
        controller: 'hotDishesCtrl'
      }
    }
  })  

      .state('menu.foodItems', {
        url: '/page4/:Catid',
        views: {
          'side-menu21': {
        templateUrl: 'templates/foodItems.html',
        controller: 'foodItemCtrl'
             }
           }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});