app.controller("ItemNewCtrl", function($scope, $http, $location){
    $scope.newTask = {
      assignTo:"",
      dependancies:"",
      dueDate: "",
      isCompleted: false,
      location: "",
      task:"",
      urgency:""
    };

    $scope.items = []

  
    $scope.addNewItem = function(){
      $http.post(
        "https://du-angular-todo.firebaseio.com/items.json",
      JSON.stringify({
        assignTo:$scope.newTask.assignTo,
        dependancies:$scope.newTask.dependancies,
        dueDate:$scope.newTask.dueDate,
        isCompleted: $scope.newTask.isCompleted,
        location:$scope.newTask.location,
        task:$scope.newTask.task,
        urgency:$scope.newTask.urgency
      })
      )
      .success(function(response){
        console.log(response);
        // make sure the url matches a directory in app.js changes the url in the window.  url is a method on the $location
        $location.url("/items/list")
      })
      
    };

})