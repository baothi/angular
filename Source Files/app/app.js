var myapp = angular.module("myapp",[]);
// phần 1
myapp.controller("controller1", function($scope){
  $scope.message = 'noi dung 1';
});

myapp.controller("controller2", function($scope){
  $scope.message = 'noi dung 2';
});

// phần 2
myapp.controller("controller1", function($scope, $rootScope){
  // $scope.message = 'noi dung chung';
  // $rootScope.messages = "noi dung da thay doi"
});

myapp.controller("controller2", function($scope){
  // $scope.message = 'noi dung 2';
});

// phần 4
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

myapp.directive("ngFormlogin", function(){
  return {
    templateUrl: 'app/templates/login_form.html'
  };
});

myapp.controller('loginController', function($scope){
  $scope.checkLogin = function(){
    var username = $scope.username;
    var password = $scope.password;

    alert("Username: " + username + " -Password: " + password);
  };
});
// phần 5
myapp.controller("MessageController", function($scope){
  $scope.ShowMessage = function(){
    alert("MessageController !");
  }
});

myapp.directive('message',function(){
  return function(scope, element, attrs){
    element.bind('mouseenter', function(){
      scope.ShowMessage();//cach 1
      scope.$apply("ShowMessage()"); // cach 2
    });
  };
});

// phần 6 Directive Linking
myapp.controller("MessageController1", function($scope){

  $scope.ShowMessage = function(){
    alert("MessageController1")
  };
});

myapp.directive('message',function(){
  return {
    restrict : "E",
    link : function(scope, element, attrs){
      // scope.ShowMessage();
      element.bind("mouseenter", function(){
        scope.ShowMessage();
      });
    }
  };
});
