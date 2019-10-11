const moduloPrincipal = angular.module("appPrincipal",[]);

moduloPrincipal.controller("HomeController", HomeController);

// Injeção de dependencias no componente controller
HomeController.$inject = ["$scope"];

function HomeController($scope){
    $scope.nome = "Alen Kaleb";
}