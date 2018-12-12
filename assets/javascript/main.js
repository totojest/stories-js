/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 * 
 */
import { Login } from './../../src/user/login.class'; // import classe Login située 2 dossiers en amont, à la localisation indiquée

let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';

// Création instance de la classe Login
const login = new Login(); //déclaration et construction objet login