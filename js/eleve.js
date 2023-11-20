class Eleve {
    constructor(n, p, c) {
        this.nom = n;
        this.prenom = p;
        this.classe = c;
        this.notes = {
            maths: [],
            algorithmique: [],
            javaScript: [],
        }


        this.hello = function () {
            return (`Je suis ${this.prenom} ${this.nom} en formation ${this.classe}.`)
        }


    }
}


