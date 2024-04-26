class Bag {
    constructor(weight, id) {
        this.weight = weight;
        this.id = id;
    }

    assignOwner(person) {
        this.owner = person;
    }

    getOwner() {
        return this.owner;
    }
}


module.exports = Bag;