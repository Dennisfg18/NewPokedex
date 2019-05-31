// Write your code here
var Pokemon = angular.module("Pokemon",[])

Pokemon.controller("ListadoPokemon",function($scope,$rootScope,$http){
	$scope.Pokebola = [];
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/55"
	}).then(function succes(x){
		$scope.Pokebola.push(x);
	})
})