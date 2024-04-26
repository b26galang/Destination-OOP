const Person = require('../classes/Person');

describe("A test suite for the Person class", () => {
    let person = new Person("Bridget", "Japan");

    test("Constructor should initialize an instance of the Person class", () => {
        expect(person).notToBe(null);
        expect(person).notToBe(undefined);
    })

    test("name and destination have been assigned correctly", () => {
        expect(person.name).toBe("Bridget");
        expect(person.destination).toBe("Japan");
    })

    test("bags initializes as an empty array", () => {
        expect(person.bags.length).toBe(0);
    })

    test("addBags() adds a bag to the bags array", () => {
        bags.addBags("Laptop Bag");
        expect(person.bags[0]).toBe("Laptop Bag");
    })

})


