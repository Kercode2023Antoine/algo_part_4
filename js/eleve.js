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
        alert(`Je suis ${this.prenom} ${this.nom} en formation ${this.classe}.`)
        // return (`Je suis ${this.prenom} ${this.nom} en formation ${this.classe}.`)
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

    addNote(matter, note) {
       this.notes[matter].push(note)
     }

    addMatter(matter){
        this.notes[matter] = []
    }  
    // addNoteEn = function(note){
    //         this.notes.anglais.push(note)
    //     }
        


}
