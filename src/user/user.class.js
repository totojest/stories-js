/**
 * @name User
 * @desc Service de gestion utilisateurs
 * @author Aelion
 * @version 1.0.0
 */
class User {
    constructor() {

    }

/**
* Définition username de l'utilisateur
* @param {*} userName
* 
*/
    setUserName(userName) {
        this.userName = userName;
    }

/**
* Définition password de l'utilisateur
* @param {*} password
* 
*/
    setPassword(password) {
        this.password = password;
    }

    /**
 * Retourne vraie si l'utilisateur est connu ou pas
 * @param {*} userName
 * 
 */
    authenticate() {
        if (this.userName === 'tjestin' && this.password === 'tjest') {
            this.group = 'Administrateur';
            return true;
        }
    }


}