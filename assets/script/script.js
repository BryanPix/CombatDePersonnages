
class personnage {
    nom = "";
    vie = 0;
    attaque = 0;
    defense = 0;
    existe = false;
   
    constructor(_nom) {
        if (_nom != ""){
        this.nom = _nom;
        this.vie = this.nombreAleatoire(0, 100);
        this.attaque = this.nombreAleatoire(0, 100);
        this.defense = this.nombreAleatoire(0, 100);
        this.existe = true;
    
    } else {
        console.log("erreur veulliez entrer un nom valide");
    }
    }
    
    nombreAleatoire(min, max) {
        return Math.round((max - min) * Math.random()) + min;
    }
    info() {
        console.log("Nom : " + this.nom + " - Vie : " + this.vie + " -  Attaque : " + this.attaque + " - Defense : " + this.defense)
    }
    attaquer(defenseur){
        console.log(`Nouvelle attaque de ${this.nom} sur ${defenseur.nom}`);

        if (this.attaque > defenseur.defense) {
            defenseur.vie -= 10 ;
        } else if (this.attaque == defenseur.defense) {
            defenseur.vie -= 5 ;
        } else if (this.attaque < defenseur.defense) {
            this.vie -= 5 ;
        }
        // A termine ici 
    }
    
    
}

// perso1.info();
// perso2.info();
// perso3.info();
// perso4.info();
// let perso1 = new personnage("Paine");
// let perso2 = new personnage("Yuna");
// let perso3 = new personnage("Riku");
// let perso4 = new personnage("Leblanc");

const joueur = 2;
const fighter = [];

for (let i = 0; i < joueur; i++) {
    const nom = prompt("Entrez le nom du joueur " + (i + 1) + " : ");
    const fighting = new personnage(nom);
    if (fighting.existe) {
        fighting.info();
        fighter.push(fighting);
    }

    if (fighter.length === 2) {
        fighter[0].attaquer(fighter[1]);
    }

}