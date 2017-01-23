angular
  .module('ngRecipes', ['ui.bootstrap', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(false);

      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          views: {
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'main': {
              templateUrl: 'main.html',
              controller: 'MainCtrl'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('login', {
          url: '/login',
          views: {
            'login': {
              templateUrl: 'views/login.html'
            },
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('register', {
          url: '/register',
          views: {
            'register': {
              templateUrl: 'views/register.html',
              controller: 'RegistrationCtrl'
            },
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('recipes', {
          url: '/recipes',
          views: {
            'user-nav': {
              templateUrl: 'views/user-nav.html'
            },
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'recipes': {
              templateUrl: 'views/all-recipes.html',
              controller: 'RecipesCtrl',
              controllerAs: 'recipes'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('categories', {
          url: '/categories/{category}',
          views: {
            'user-nav': {
              templateUrl: 'views/user-nav.html'
            },
            'categories': {
              templateUrl: 'views/categories.html',
              controller: 'CategoriesCtrl'
            },
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('recipes.detail', {
          url: '/{id:[0-9]{1,8}}',
          views: {
            'user-nav': {
              templateUrl: 'views/user-nav.html'
            },
            'sidebar': {
              templateUrl: 'views/sidebar.html',
              controller: 'SidebarCtrl',
              controllerAs: 'recipes'
            },
            'detail': {
              templateUrl: 'views/recipe-detail.html',
              controller: 'ViewRecipeCtrl',
              controllerAs: 'recipe'
            },
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('new', {
          url: '/new',
          views: {
            'user-nav': {
              templateUrl: 'views/user-nav.html'
            },
            'new': {
              templateUrl: 'views/new.html',
              controller: 'NewRecipeCtrl'
            },
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('show-new', {
          url: '/show-new',
          views: {
            'user-nav': {
              templateUrl: 'views/user-nav.html'
            },
            'show-new': {
              templateUrl: 'views/show-new.html',
              controller: 'ShowNewCtrl'
            },
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('list', {
          url: '/list',
          views: {
            'user-nav': {
              templateUrl: 'views/user-nav.html'
            },
            'list': {
              templateUrl: 'views/list.html',
              controller: 'ListCtrl',
              controllerAs: 'list'
            },
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('account', {
          url: '/account',
          views: {
            'account': {
              templateUrl: 'views/account.html',
              controller: 'AccountCtrl'
            },
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'user-nav': {
              templateUrl: 'views/user-nav.html'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('logout', {
          url: '/logout',
          views: {
            'main-nav': {
              templateUrl: 'views/main-nav.html',
              controller: 'MainCtrl'
            },
            'logout': {
              templateUrl: 'views/logout.html'
            },
            'footer': {
              templateUrl: 'views/footer.html'
            }
          }
        })
        .state('sitemap', {
          url: '/sitemap',
          views: {
            'sitemap': {
              templateUrl: 'views/sitemap.html'
            }
          }
        });
  }
]);
