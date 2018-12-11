/**
 * @name MenuUser
 * @desc Menu utilisateurs
 * @author Aelion
 * @version 1.0.0
 */
export class MenuUser {
    constructor(params) {
        $('#menuUtilisateur').removeClass('hidden');
        $('#mesStories').removeClass('disabled');

        if (params.group === 'Administrateur') {
            $('#toutesStories').removeClass('disabled');
        }else{
            $('#toutesStories').remove();
        }

        $('#utilisateur').html(params.userName);
        $('#action').html('Mes préférences')
        $('#anotherAction').html('Changer mot de passe')
        $('#connecter').html('Se déconnecter')
    }
}