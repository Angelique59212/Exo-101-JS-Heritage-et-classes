/**
 * Crèe un objet de type voiture
 * @param color
 * @param wheels
 * @param mark
 * @param assurance
 * @param proprietaire
 */

class Car extends Vehicle {

    constructor(color, wheels, mark, assurance, proprietaire) {
        super (color,wheels,mark);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }
    /**
     * Fait aller au car wash
    */
    passerAuCarWash() {
        console.log("Je pars au Car Wash");
    };
}

let car = new Car();
car.passerAuCarWash();