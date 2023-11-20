class Eleve {
    constructor(n, p, c) {
        this.nom = n;
        this.prenom = p;
        this.classe = c;
        this.notes = {
            maths: [],
            algorithmique: [],
            javaScript: [],
            // anglais: [],
        }


        this.hello = function () {
            return (`Je suis ${this.prenom} ${this.nom} en formation ${this.classe}.`)
        }

        this.addNoteAlgo = function(note) {
            this.notes.algorithmique.push(note)
        }

        this.addNoteJs = function(note) {
            this.notes.javaScript.push(note)
        }

        this.addNoteMaths = function(note) {
            this.notes.maths.push(note)
        }

        // this.addNoteEn = function(note){
        //     this.notes.anglais.push(note)
        // }
        
}

}
