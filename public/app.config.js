angular
  .module('recipebox')
  .config(config)
  .run(runFunction);

runFunction.$inject = ['$rootScope', '$state'];
function runFunction($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    if (error === "AUTH_REQUIRED") {
      $state.go("home");
    }
  });
}
config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$waitForSignIn();
=======
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
            }]
          }
        },
        'main': {
<<<<<<< HEAD
          templateUrl: 'main/main.html'
=======
          templateUrl: 'main/main.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        'login': {
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$waitForSignIn();
=======
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
            }]
          }
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$waitForSignIn();
=======
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('register', {
      url: '/register',
      views: {
        'register': {
          templateUrl: 'registration/register.html',
<<<<<<< HEAD
          controller: 'RegistrationCtrl',
          resolve: {
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$waitForSignIn();
            }]
          }
=======
          controller: 'RegistrationCtrl'
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$waitForSignIn();
=======
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('recipes', {
      url: '/recipes',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$waitForSignIn();
=======
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
            }]
          }
        },
        'recipes': {
          templateUrl: 'recipes/all-recipes.html',
          controller: 'RecipesCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
=======
            "currentAuth": ['Auth', function(Auth) {
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
              return Auth.$waitForSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('categories', {
      url: '/categories/{category}',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'categories': {
          templateUrl: 'categories/categories.html',
<<<<<<< HEAD
          controller: 'CategoriesCtrl'
=======
          controller: 'CategoriesCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
=======
            "currentAuth": ['Auth', function(Auth) {
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('recipes.detail', {
<<<<<<< HEAD
      url: '/{id}',
=======
      url: '/{id:[0-9]{1,8}}',
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'sidebar': {
          templateUrl: 'nav/sidebar.html',
<<<<<<< HEAD
          controller: 'SidebarCtrl'
        },
        'detail': {
          templateUrl: 'view_recipe/recipe-detail.html',
          controller: 'ViewRecipeCtrl'
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl'
=======
          controller: 'SidebarCtrl',
          controllerAs: 'recipes'
        },
        'detail': {
          templateUrl: 'view_recipe/recipe-detail.html',
          controller: 'ViewRecipeCtrl',
          controllerAs: 'recipe'
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('new', {
      url: '/new',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'new': {
          templateUrl: 'new_recipe/new.html',
<<<<<<< HEAD
          controller: 'NewRecipeCtrl',
          resolve: {
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
=======
          controller: 'NewRecipeCtrl'
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
=======
            "currentAuth": ['Auth', function(Auth) {
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('show-new', {
      url: '/show-new',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'show-new': {
          templateUrl: 'show_new/show-new.html',
<<<<<<< HEAD
          controller: 'NewRecipeCtrl',
          resolve: {
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
=======
          controller: 'ShowNewCtrl'
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
=======
            "currentAuth": ['Auth', function(Auth) {
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
              return Auth.$requireSignIn();
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('list', {
      url: '/list',
      views: {
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'list': {
          templateUrl: 'list/list.html',
          controller: 'ListCtrl',
<<<<<<< HEAD
          resolve: {
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
=======
          controllerAs: 'list'
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$waitForSignIn();
=======
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
            }]
          }
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('account', {
      url: '/account',
      views: {
        'account': {
          templateUrl: 'account/account.html',
          controller: 'AccountCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
=======
            "currentAuth": ['Auth', function(Auth) {
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
              return Auth.$requireSignIn();
            }]
          }
        },
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$waitForSignIn();
=======
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
            }]
          }
        },
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
<<<<<<< HEAD
    .state('account-update', {
      url: '/account-update',
      views: {
        'account-update': {
          templateUrl: 'account/account-update.html',
          controller: 'AccountCtrl',
          resolve: {
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
=======
    .state('logout', {
      url: '/logout',
      views: {
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl',
          resolve: {
<<<<<<< HEAD
            "currentAuth": ["Auth", function(Auth) {
              return Auth.$waitForSignIn();
            }]
          }
        },
        'user-nav': {
          templateUrl: 'nav/user-nav.html'
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('login.password-reset', {
      url: '/password-reset',
      onEnter: ['$stateParams', '$state', '$uibModal', 'Auth', function($stateParams, $state, $uibModal, Auth) {
        $uibModal.open({
          templateUrl: "login/password-reset.html",
          controller: ['$scope', 'Auth', function($scope, Auth) {
            $scope.dismiss = function() {
              $scope.$dismiss();
            };
            $scope.resetPassword = function() {
              Auth.$sendPasswordResetEmail($scope.resetemail).then(function() {
                console.log("Password reset email sent successfully.");
                $scope.$close(true);
              }).catch(function(error) {
                console.log("Error: ", error);
              });
            };
            $scope.save = function() {
              $scope.$close(true);
            };
          }]
        }).result.finally(function() {
          $state.go('^');
        });
      }]
    })
    .state('logout', {
      url: '/logout',
      views: {
        'main-nav': {
          templateUrl: 'nav/main-nav.html',
          controller: 'LoginCtrl'
        },
        'logout': {
          templateUrl: 'logout/logout.html',
          controller: 'LoginCtrl'
=======
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
        },
        'logout': {
          templateUrl: 'logout/logout.html',
          controller: 'LoginCtrl',
          resolve: {
            "currentAuth": ['Auth', function(Auth) {
              return Auth.$requireSignIn();
            }]
          }
>>>>>>> 05364b7359973ca0fabdb180e56054995efea601
        },
        'footer': {
          templateUrl: 'footer/footer.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    })
    .state('sitemap', {
      url: '/sitemap',
      views: {
        'sitemap': {
          templateUrl: 'sitemap/sitemap.html'
        },
        data: {
          css: ['assets/css/pages.css', 'assets/css/nav-footer.css']
        }
      }
    });
  }
