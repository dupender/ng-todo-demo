app.factory("itemStorage", function($q, $http, firebaseURL){

  var getItemList = function(){
    var items = [];
    return $q(function(resolve, reject){
    $http.get(firebaseURL+"items.json")
    .success(function(itemObject){
        // you don't really need itemCollection var now (got rid of itemObject.items)
        var itemCollection = itemObject;
        console.log("itemObject", itemCollection);
        // returns an array (item0, item1, item2) of all the keys in that objectTHEN the forEach goes thru every key in that array
        Object.keys(itemCollection).forEach(function(key){
        // adds an id (firebase id) property to that object (so we can find it later) & sets it equal to each key
         itemCollection[key].id = key;
        // pushing the object into the items array
        items.push(itemCollection[key]);
      })
      resolve(items);
      }) 
      .error(function(error){
          reject(error); 
      });
    }) 
}

var deleteItem = function(itemId){
    return $q(function(resolve, reject){
      $http
        .delete(firebaseURL+"items/"+itemId+".json")
        .success(function(objectFromFirebase){
          resolve(objectFromFirebase)
        })
    })
}

var postNewItem = function(newItem){
  return $q(function(resolve, reject){
    $http.post(
      firebaseURL+"items.json",
      JSON.stringify({
        assignedTo: newItem.assignedTo,
        dependencies: newItem.dependencies,
        dueDate: newItem.dueDate,
        isCompleted:newItem.isCompleted,
        location: newItem.location,
        task: newItem.task,
        urgency: newItem.urgency
      })
      )
      .success(
          function(objectFromFirebase){
            resolve(objectFromFirebase);
          }
        );
    });
  }
  return{getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem}
})

