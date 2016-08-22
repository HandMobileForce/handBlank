/**
 * Created by admin on 2016/8/4.
 */

angular.module('demoModule')

  .controller('demo2Ctrl', [
    '$scope',
    '$state',
    'publicMethod',
    function ($scope,
              $state,
              publicMethod) {

      console.log('demo2Ctrl.enter');

      //返回操作时
      $scope.getBack = function () {
        publicMethod.goBack();
      };


      $scope.$on('$ionicView.enter', function (e) {
        console.log('demo2Ctrl.$ionicView.enter');
      });

      $scope.$on('$destroy', function (e) {
        console.log('demo2Ctrl.$destroy');
      });
    }]);
