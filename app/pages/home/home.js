/**
 * Created by admin on 2016/8/2.
 */

angular.module('homeModule')

  .controller('homeCtrl', [
    '$scope',
    '$state',
    'publicMethod',
    function ($scope,
              $state,
              publicMethod) {


      console.log('homeCtrl.enter');

      $scope.demo1 = function () {
        $state.go("demo1");
      };

      $scope.demo2 = function () {
        $state.go("demo2");
      };


      $scope.$on('$ionicView.enter', function (e) {
        console.log('homeCtrl.$ionicView.enter');
      });

      $scope.$on('$destroy', function (e) {
        console.log('homeCtrl.$destroy');
      });
    }]);
