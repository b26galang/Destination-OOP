class Person {
    constructor(name, destination) {
        this.name = name;
        this.destination = destination
        this.bags = [];

    }

    addBag(bag) {
        bags.push(bag);
    }

    getBags() {
        return bags;
    }

}


module.exports = Person;