/**
 * Crèe un objet de type vélo
 * @param color
 * @param wheels
 * @param mark
 * @param rayonRoues
 * @param typePeinture
 */
class Bike extends Vehicle {

    constructor(color, wheels, mark, rayonRoues, typePeinture) {
        super(color,wheels,mark);
        this.rayonRoues = rayonRoues;
        this.typePeinture = typePeinture;
    }
    /**
     * Monter sur le vélo
     */
    monter() {
        console.log("Je monte sur mon vélo");
    };
}

let bike = new Bike();
bike.monter();

