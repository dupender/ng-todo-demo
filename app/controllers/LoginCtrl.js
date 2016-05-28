"use strict"

app.controller("LoginCtrl", function($scope, $location, firebaseURL, authFactory){
    $scope.welcome = "hello"
    console.log($scope.welcome);

    let ref = new Firebase(firebaseURL);
    // console.log("ref", ref);

    // $scope.hasUser = false;


    $scope.account = {
      email: "",
      password: ""
    }

    if($location.path() ==="/logout"){
      //kills login or auth token
      ref.unauth();
    }

    $scope.register = () => {
      console.log("you clicked register" );
      ref.createUser({
        email: $scope.account.email,
        password: $scope.account.password
      }, (error, userData) =>{
        if(error){
          console.log(`Error creating user: ${error}` );
        } else{
          console.log(`Created user account with uid: ${userData.uid}`)
          $scope.login();
        }
      })
    };

    $scope.login = () => {
      console.log("you clicked login");

      authFactory
        .authenticate($scope.account)
        .then(() => {
          // $scope.hasUser = true;
          $location.path("/");
          $scope.$apply();
        })
    };


      })