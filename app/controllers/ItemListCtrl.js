app.controller("ItemListCtrl", function($scope, $http, $location, itemStorage){
    $scope.items = [];

//     var getItems = function(){
//     $http.get("https://du-angular-todo.firebaseio.com/items.json")
//     .success(function(itemObject){
//       // you don't really need itemCollection var now (got rid of itemObject.items)
//       var itemCollection = itemObject;
//       console.log("itemObject", itemCollection);
//       // returns an array (item0, item1, item2) of all the keys in that objectTHEN the forEach goes thru every key in that array
//       Object.keys(itemCollection).forEach(function(key){
//         // adds an id (firebase id) property to that object (so we can find it later) & sets it equal to each key
//          itemCollection[key].id = key;
//         // pushing the object into the items array
//         $scope.items.push(itemCollection[key]);
//       })
//     })
// }
    // getItems();

    itemStorage.getItemList().then(function(itemCollection){
      console.log("itemCollection from promise", itemCollection);
      $scope.items = itemCollection;
    })

    $scope.itemDelete = function(itemId){
      console.log("itemId",itemId);
      itemStorage.deleteItem(itemId).then(function(response){
        itemStorage.getItemList().then(function(itemCollection){
          $scope.items=itemCollection;
        })
      })     
    }

    $scope.inputChange = function(item){
      itemStorage.updateCompletedStatus(item)
        .then(function(response){
          console.log("response",response );
        })
    }
});