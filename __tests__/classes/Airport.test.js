const Aiport = require('../classes/Airport');

describe("A test suite for the Airport class", () => {
    let airport = new Airport("Seatac");

    test("Constructor assigns correct values", () => {
        expect(airport.name).toBe("Seatac");
    })

    test("airplaneCode is the default static value of SEA", () => {
        expect(airplane.airplaneCode).toBe("SEA");
    })

    test("planes array initializes as an empty array", () => {
        expect(airport.planes.length).toBe(0);
    })

    test("addPlane will add Plane objects to the plane array",() => {
        airport.addPlane("Delta");

        expect(airport.planes[0]).toBe("Delta");
    })


})