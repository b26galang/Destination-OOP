const Plane = require('../classes/Plane');

describe("A test suite for the Plane class", () => {
    let plane = new Plane("Alaska Airlines", "Hawaii", "New York");

    test("Constructor assigns the correct values", () => {
        expect(plane.company).toBe("Alaska Airlines");
        expect(plane.origin).toBe("Hawaii");
        expect(plane.destination).toBe("New York");
    })

    test("passengers iniitializes as an empty array", () => {
        expect(plane.passengers.length).toBe(0);

    })

    test("A Person is added to the passengers array when using addPassenger", () => {
        plane.addPassenger("Brandy");
        expect(plane.passengers[0]).toBe("Brandy");
    }) 

})