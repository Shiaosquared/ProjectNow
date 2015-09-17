  (function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        ons.notification.alert({ message: 'tapped' });
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('HomeController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

   module.controller('ArticleController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

    module.controller('commentController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

    module.controller('userAccountController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });



//in the string "___controller", make sure you're naming the page that you're targeting.
 //I.E, home page = homeController, account = accountController

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;

    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};

      data.items = [
          {
              title: 'Here Be Dragons: An Analysis of George Kennan’s Long Telegram',
              desc: 'One prominent example of this tendency is the “Long Telegram” sent by George Kennan to Secretary',
              user: '',
              date: ''
          },
          {
              title: 'Another Item Title',
              label: '6h',
              desc: 'Ut enim ad minim veniam.'
          },
          {
              title: 'Yet Another Item Title',
              label: '1day ago',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          },
          {
              title: 'Yet Another Item Title',
              label: '1day ago',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          }
      ];

      return data;
  });
})();

