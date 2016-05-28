app.controller("ItemNewCtrl", function($scope, $http, $location, itemStorage){
    $scope.title ="New Item";
    $scope.submitButtonText = "Add New Item";

    $scope.newTask = {
      assignTo:"",
      dependancies:"",
      dueDate: "",
      isCompleted: false,
      location: "",
      task:"",
      urgency:"",
      uid:""
    };

    $scope.addNewItem = function(){
      itemStorage.postNewItem($scope.newTask)
        .then(function successCallback(response){
          console.log("response",response );
          $location.url("items/list");
        });        
    };
});