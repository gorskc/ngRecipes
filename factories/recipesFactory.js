angular
	.module('ngRecipes')
	.factory('recipesFactory', recipesFactory);

recipesFactory.$inject = ['$http'];

function recipesFactory($http) {

		return {
			getRecipes: getRecipes
		};

		function getRecipes() {
			return $http.get('data/data.json')
				.then(getRecipesComplete)
				.catch(getRecipesFailed);

			function getRecipesComplete(response) {
				return response.data;
			}

			function getRecipesFailed(error) {
				console.log(error.data);
			}
		}


	}
