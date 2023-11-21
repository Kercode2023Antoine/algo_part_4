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
    }

    hello() {
        return (`Je suis ${this.prenom} ${this.nom} en formation ${this.classe}.`)
    }

    addNoteAlgo(note) {
        this.notes.algorithmique.push(note)
    }

    addNoteJs(note) {
            this.notes.javaScript.push(note)
        }

    addNoteMaths(note) {
            this.notes.maths.push(note)
        }

     AddNote (matter, note) {
        
     }

    // addNoteEn = function(note){
    //         this.notes.anglais.push(note)
    //     }
        


}
