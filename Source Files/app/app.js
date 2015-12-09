var myapp = angular.module("myapp",[]);
// myapp.controller("ShowMessage", function($scope){
//   // $scope.message ="xin chào";
//   // $scope.title= 'Tieu de';
//   $scope.data = {};
//   $scope.data.message = "noi dung";
// });
// myapp.controller("controller1", function($scope){
//   $scope.message = 'noi dung 1';
// });

// myapp.controller("controller2", function($scope){
//   $scope.message = 'noi dung 2';
// });


myapp.controller("controller1", function($scope, $rootScope){
  // $scope.message = 'noi dung chung';
  // $rootScope.messages = "noi dung da thay doi"
});

myapp.controller("controller2", function($scope){
  // $scope.message = 'noi dung 2';
});
myapp.controller("maytinh",function($scope){
  $scope.ketqua = "Kết Quả Là: ";



  $scope.tinh = function(){
    var so1 = parseInt($scope.so1);
    var so2 = parseInt($scope.so2);
    var pheptoan = $scope.pheptoan;
    if(pheptoan == '+'){
      $scope.ketqua = 'Kết Quả Là: ' + (so1 + so2);
    }
    else if(pheptoan == '-'){
      $scope.ketqua = 'Kết Quả Là: ' + (so1 - so2);
    }
    else if(pheptoan == '*'){
      $scope.ketqua = 'Kết Quả Là: ' + (so1 * so2);
    }
    else {
      $scope.ketqua = 'Kết Quả Là: ' + (so1 / so2);
    }
  };
});
