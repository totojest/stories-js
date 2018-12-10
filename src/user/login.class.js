class Login {
    constructor() {
        // console.log('Je suis le constructeur de Login') // pour tester que le constructeur marche bien
        // Modifier le titre du document HTML
        $(document).attr('title', 'Identification'); //$ = objet jQuery, entre (): selecteur, .attr: méthode de jQuery pour attribute

        //Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');

        //Définition du listener sur le formulaire
        this.formListener();
    }

    /**
     * formListener: Gestionnaire d'événement sur le formulaire de login (Méthode que l'on définit nous même)
     * @param void
     * @return void (Aucun parametre ni de retour)
     */
    formListener() {
        $('#loginForm').on(
            'keyup', //on écoute tous les changements sur le formulaire
            function (event) { //callback: fonction appelée si l'événement défini survient
                //Vérification contenu des champs Login & password
                const login = $('[name="loginField"]');
                const password = $('[name="passwordField"]');

                // Les champs sont-ils remplis?
                if (login.val() !== '' && password.val() !== '') {
                    $('#btnLogin').removeAttr('disabled');
                }
                else {
                    $('#btnLogin').attr('disabled', 'disabled'); //remettre la valeur disabled sur l'attribut disabled
                }
            }
        );
    }


}