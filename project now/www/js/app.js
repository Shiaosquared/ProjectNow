  (function(){
  'use strict';
  var module = angular.module('app', ['onsen', 'service']);

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

  module.controller('MasterController', function($scope, $data, ParseService) {
    //$scope.items = $data.items;

    ParseService.getArticles(function(results) {
      $scope.$apply(function() {
        $scope.items = results;
      });
    });

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
              desc: 'One prominent example of this tendency is the “Long Telegram” sent by George Kennan to Secretary of State James F. Brynes on February 22nd 1946...',
              label: '3h'
          },
          {
              title: 'To what extent can the failure of Pakistani democracy be attributed to Muhammad Ali Jinnah?',
              label: '6h',
              desc: 'Since achieving independence from British India in 1947, Pakistan’s political landscape has been dominated by recurring cycles of political instability of political instability and military intervention... '
          },
          {
              title: 'Why Did The US Policy of Containment Fail in South Asia?',
              label: '1d',
              desc: 'Though South Asia was described by Lloyd Rudolph as being perpetually on the “backburner” of the United States’ foreign policy during the Cold War and so considered to be relatively less important than Western Europe or South-East Asia...'
          },
          {
              title: 'Yet Another Item Title',
              label: '2d',
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          }
      ];

      return data;
  });
})();

