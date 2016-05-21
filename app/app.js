
var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}]
})

app.controller("TodoCtrl", function($scope){
    $scope.welcome = "hello";
    $scope.showListView = true;
    $scope.newTask = {};

    $scope.items = [
      {
        id: 0,
        task:"mow the lawn",
        isCompleted:true,
        dueDate:"12/5/17",
        assignedTo: "greg",
        location: "zoe's house",
        urgency: "low",
        dependancies:["sunshine, clippers, hat, water, headphones"]
      },
      {
        id: 1,
        task:"grade quizzes",
        isCompleted:false,
        dueDate:"12/5/17",
        assignedTo: "jow",
        location: "NSS",
        urgency: "high",
        dependancies:["wifi, tissues, vodka"]
      },
      {
        id: 2,
        task:"take a nap",
        isCompleted:false,
        dueDate:"12/5/17",
        assignedTo: "zoe",
        location: "zoe's house",
        urgency: "low",
        dependancies:["hammock, vodka"]
      }
    ]

    $scope.newItem = function(){
      console.log("you clicked new Item" );
      $scope.showListView = false;

    };
    $scope.allItem = function(){
      console.log("YOu clicked all items" );
      $scope.showListView = true;

    }
    $scope.addNewItem = function(){
      $scope.newTask.isCompleted = false;
      $scope.newTask.id = $scope.items.length;
      console.log("you added a new item", $scope.newTask );
      $scope.items.push($scope.newTask);
      $scope.newTask = "";
    }

})