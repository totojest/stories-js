/**
 * @name Toast
 * @desc Affiche un toast (ou snackbar)
 * @author Aelion
 * @version 1.0.0
 */
class Toast {
    constructor(params) {
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
    setBackground(cssClass) {
        this.backgroundClass = cssClass;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    toastIt() {
        const toaster = $('<div>');// création d'un nouvel objet <div> en mémoire du DOM

        // On lui ajoute des classes
        toaster
            .addClass('toast')
            .addClass(this.backgroundClass)
            .html(this.message);

        //Ajoute le toaster au document lui-même
        toaster.appendTo($('body'));

        // Affichage pendant un certain temps
        setTimeout(
            function () {
                //Ici, quand on arrive au bout de l'intervalle de temps
                toaster.remove();
            },
            this.duration * 1000
        );
    }

}