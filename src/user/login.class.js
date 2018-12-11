class Login {
    constructor() {
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
    formListener() {
        let login = this.login;
        let password = this.password;
        $('#loginForm').on(
            'keyup', //on écoute tous les changements sur le formulaire
            function (event) { //callback: fonction appelée si l'événement défini survient
                // Les champs sont-ils remplis?
                if (login.val().length >= 5 && password.val() !== '') {
                    $('#btnLogin').removeAttr('disabled'); // On enlève l'attribut disabled du bouton connexion quand les champs sont remplis et que le login >= 5 caractères
                }
                else {
                    $('#btnLogin').attr('disabled', 'disabled'); //remettre la valeur disabled sur l'attribut disabled
                }
            }
        );
    }
    // écoute du submit:
    submitListener() {
        let login = this.login;
        let password = this.password;
        $('#loginForm').on(
            'submit',
            function (event) {
                event.preventDefault(); //empêche l'action pas défaut (d'un submit ou autre...)
                const user = new User(); // instancie nouvel utilisateur
                //Définit le login et le password de l'utilisateur
                user.setUserName($('[name="loginField"]').val());
                user.setPassword($('[name="passwordField"]').val());
                // Gère l'authentification
                if (user.authenticate()) {
                    console.log('Tu peux y aller');
                } else {
                    console.log('Non, pas le droit');
                    login.val(''); // ou $('[name="loginField"]').val('') , ça marche aussi si on n'avait pas défini les attributs (à rappeler aussi en "let" au début de la méthode)
                    password.val('');
                    $('#btnLogin').attr('disabled', 'disabled');

                    // On peut instancier un toast
                    const toast = new Toast(
                        {
                            'message': 'Ce login ou ce mot de passe ne correspond à aucun utilisateur',
                            'duration': 2
                        }

                    );
                    toast.toastIt();

                }
            }
        )

    }

}