app.controller("ItemViewCtrl", function($scope, $http, $routeParams){
    $scope.items = [];
    $scope.selectedItem = {}; 
    console.log($routeParams.itemId);

    $http.get("https://du-angular-todo.firebaseio.com/items.json")
    .success(function(itemObject){
      Object.keys(itemObject).forEach(function(key){
        itemObject[key].id=key;
        $scope.items.push(itemObject[key]);
      
      $scope.selectedItem = $scope.items.filter(function(item){
        return item.id ===$routeParams.itemId;
      })[0];
    })
    })   
})
