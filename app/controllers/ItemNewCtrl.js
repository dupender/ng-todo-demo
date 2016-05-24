app.controller("ItemNewCtrl", function($scope, $http, $location, itemStorage){
    $scope.newTask = {
      assignTo:"",
      dependancies:"",
      dueDate: "",
      isCompleted: false,
      location: "",
      task:"",
      urgency:""
    };

    $scope.addNewItem = function(){
      itemStorage.postNewItem($scope.newTask)
        .then(function successCallback(response){
          console.log("response",response );
          $location.url("items/list");
        });        
    };
});