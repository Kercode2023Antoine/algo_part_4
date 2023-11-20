function Eleve(n, p, c ,no){

    this.nom = n;
    this.prenom = p;
    this.classe = c;
    no = {
        maths : [],
        algorithmique : [],
        javaScript :[],
    } 
    this.notes = no;

    this.hello = function () {
        return(`Je suis ${this.prenom} ${this.nom} en formation ${this.classe}.`)
    }
    

}
    

    
