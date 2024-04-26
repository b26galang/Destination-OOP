const Bag = require('../classes/Bag');

describe("A test suite for the Bag class "), () => {
    let bag = new Bag(10, 1);

    // initialization of a bag - the owner property should be null
    expect(bag.owner).toBe(null);
    bag.owner = "bubba";
    // assign an owner to bag if owner can properly get retrieved with getOwner()
    bag.getOwner().toBe("bubba");
    


}