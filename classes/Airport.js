class Airport {
    constructor(name) {
        this.name = name;
        this.aiportCode = "SEA";
        this.planes = [];
    }

    getPlanes() {
        return this.planes;
    }

    addPlane(plane) {
        this.planes.push(plane);
    }

}


module.exports = Airport;