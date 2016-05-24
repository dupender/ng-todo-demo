app.controller("ItemListCtrl", function($scope, $http){
    $scope.items = [];

    var getItems = function(){
    $http.get("https://du-angular-todo.firebaseio.com/items.json")
    .success(function(itemObject){
      // you don't really need itemCollection var now (got rid of itemObject.items)
      var itemCollection = itemObject;
      console.log("itemObject", itemCollection);
      // returns an array (item0, item1, item2) of all the keys in that objectTHEN the forEach goes thru every key in that array
      Object.keys(itemCollection).forEach(function(key){
        // adds an id (firebase id) property to that object (so we can find it later) & sets it equal to each key
         itemCollection[key].id = key;
        // pushing the object into the items array
        $scope.items.push(itemCollection[key]);
      })
    })
}
    getItems();
    $scope.itemDelete = function(itemId){
      console.log("itemId",itemId);
      $http
      .delete(`https://du-angular-todo.firebaseio.com/items/${itemId}.json`)
      .success(function(response){
        console.log("response",response);
        $scope.items = [];
        getItems();
      })
    }

});