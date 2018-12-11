/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/main.js":
/*!***********************************!*\
  !*** ./assets/javascript/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login = __webpack_require__(/*! ./../../src/user/login.class */ "./src/user/login.class.js");

// import classe Login située 2 dossiers en amont, à la localisation indiquée

var title = document.getElementById('main-title'); /**
                                                    * @name main.js
                                                    * @desc Point d'entrée principal dans l'application Javascript
                                                    * 
                                                    */

title.innerHTML = 'Hello Javascript';

// Création instance de la classe Login
var login = new _login.Login(); //déclaration et construction objet login

/***/ }),

/***/ "./src/modules/toaster/toast.class.js":
/*!********************************************!*\
  !*** ./src/modules/toaster/toast.class.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name Toast
 * @desc Affiche un toast (ou snackbar)
 * @author Aelion
 * @version 1.0.0
 */
var Toast = function () {
    function Toast(params) {
        _classCallCheck(this, Toast);

        //On passera en paramètre un objet json, qui sera écrit entre {}, si on veut qu'il soit optionnel, on peut écrire (param = null)
        if (!params.hasOwnProperty('background')) {
            //Paramètre de définition de la couleur de fond du toast (à partir de la classe CSS)
            this.backgroundClass = 'danger';
        } else {
            this.backgroundClass = params.background;
        }

        if (!params.hasOwnProperty('duration')) {
            // Durée d'affichage du toast en secondes
            this.duration = 3;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'Default message';
        } else {
            this.message = params.message;
        }
    }

    _createClass(Toast, [{
        key: 'setBackground',
        value: function setBackground(cssClass) {
            this.backgroundClass = cssClass;
        }
    }, {
        key: 'setDuration',
        value: function setDuration(duration) {
            this.duration = duration;
        }
    }, {
        key: 'toastIt',
        value: function toastIt() {
            var toaster = $('<div>'); // création d'un nouvel objet <div> en mémoire du DOM

            // On lui ajoute des classes
            toaster.addClass('toast').addClass(this.backgroundClass).html('<p>' + this.message + '</p>');

            //Ajoute le toaster au document lui-même
            toaster.appendTo($('body'));

            // Affichage pendant un certain temps
            setTimeout(function () {
                //Ici, quand on arrive au bout de l'intervalle de temps
                toaster.remove();
            }, this.duration * 1000);
        }
    }]);

    return Toast;
}();

/***/ }),

/***/ "./src/user/login.class.js":
/*!*********************************!*\
  !*** ./src/user/login.class.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = __webpack_require__(/*! ./user.class */ "./src/user/user.class.js");

var _menuUser = __webpack_require__(/*! ./menuUser.class */ "./src/user/menuUser.class.js");

var _toast = __webpack_require__(/*! ./../modules/toaster/toast.class */ "./src/modules/toaster/toast.class.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = exports.Login = function () {
    function Login() {
        _classCallCheck(this, Login);

        //console.log('Je suis le constructeur de Login') // pour tester que le constructeur marche bien
        //Modifier le titre du document HTML
        $(document).attr('title', 'Identification'); //$ = objet jQuery, entre (): selecteur, .attr: méthode de jQuery pour attribute

        //Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        //Définition attributs de classe
        this.login = $('[name="loginField"]');
        this.password = $('[name="passwordField"]');

        //Définition du listener sur le formulaire
        this.formListener();
        this.submitListener();
    }

    /**
     * formListener: Gestionnaire d'événement sur le formulaire de login (Méthode que l'on définit nous même)
     * @param void
     * @return void (Aucun parametre ni de retour)
     */


    _createClass(Login, [{
        key: 'formListener',
        value: function formListener() {
            var login = this.login;
            var password = this.password;
            $('#loginForm').on('keyup', //on écoute tous les changements sur le formulaire
            function (event) {
                //callback: fonction appelée si l'événement défini survient
                // Les champs sont-ils remplis?
                if (login.val().length >= 5 && password.val() !== '') {
                    $('#btnLogin').removeAttr('disabled'); // On enlève l'attribut disabled du bouton connexion quand les champs sont remplis et que le login >= 5 caractères
                } else {
                    $('#btnLogin').attr('disabled', 'disabled'); //remettre la valeur disabled sur l'attribut disabled
                }
            });
        }
        // écoute du submit:

    }, {
        key: 'submitListener',
        value: function submitListener() {
            var login = this.login;
            var password = this.password;
            $('#loginForm').on('submit', function (event) {
                event.preventDefault(); //empêche l'action pas défaut (d'un submit ou autre...)
                var user = new _user.User(); // instancie nouvel utilisateur
                //Définit le login et le password de l'utilisateur
                user.setUserName($('[name="loginField"]').val());
                user.setPassword($('[name="passwordField"]').val());
                // Gère l'authentification
                if (user.authenticate()) {
                    console.log('Tu peux y aller');
                    var menu = new _menuUser.MenuUser(user);
                } else {
                    console.log('Non, pas le droit');
                    login.val(''); // ou $('[name="loginField"]').val('') , ça marche aussi si on n'avait pas défini les attributs (à rappeler aussi en "let" au début de la méthode)
                    password.val('');
                    $('#btnLogin').attr('disabled', 'disabled');

                    // On peut instancier un toast
                    var toast = new _toast.Toast({
                        'message': 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                        'duration': 2
                    });
                    toast.toastIt();
                }
            });
        }
    }]);

    return Login;
}();

/***/ }),

/***/ "./src/user/menuUser.class.js":
/*!************************************!*\
  !*** ./src/user/menuUser.class.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name MenuUser
 * @desc Menu utilisateurs
 * @author Aelion
 * @version 1.0.0
 */
var MenuUser = exports.MenuUser = function MenuUser(params) {
    _classCallCheck(this, MenuUser);

    $('#menuUtilisateur').removeClass('hidden');
    $('#mesStories').removeClass('disabled');

    if (params.group === 'Administrateur') {
        $('#toutesStories').removeClass('disabled');
    } else {
        $('#toutesStories').remove();
    }

    $('#utilisateur').html(params.userName);
    $('#action').html('Mes préférences');
    $('#anotherAction').html('Changer mot de passe');
    $('#connecter').html('Se déconnecter');
};

/***/ }),

/***/ "./src/user/user.class.js":
/*!********************************!*\
  !*** ./src/user/user.class.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name User
 * @desc Service de gestion utilisateurs
 * @author Aelion
 * @version 1.0.0
 */
var User = exports.User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    /**
    * Définition username de l'utilisateur
    * @param {*} userName
    * 
    */


    _createClass(User, [{
        key: 'setUserName',
        value: function setUserName(userName) {
            this.userName = userName;
        }

        /**
        * Définition password de l'utilisateur
        * @param {*} password
        * 
        */

    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            this.password = password;
        }

        /**
        * Retourne vraie si l'utilisateur est connu ou pas
        * @param {*} userName
        * 
        */

    }, {
        key: 'authenticate',
        value: function authenticate() {
            if (this.userName === 'tjestin' && this.password === 'tjest') {
                this.group = 'Nul';
                return true;
            }
        }
    }]);

    return User;
}();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map