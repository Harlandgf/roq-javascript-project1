const index = require("./index")

const barracuda = index.barracuda

const tigerShark = index.tigerShark

marlin = new index.Fish("Marlin",2.5, "Atlantic", 88); //* Setup new test instance

test("Whether Marlin is an instance of Fish class", () => {
    expect(marlin).toBeInstanceOf(index.Fish) 
})

test("That being fished kills the barracuda", () => {
    barracuda.fished(); //* Setup
    expect(barracuda.alive).toBeFalsy();
    barracuda.alive = true; //* Teardown
})

test("That barracuda grow longer is close to the value expected", () => {
    barracuda.growLonger(); //* Setup
    expect(barracuda.length).toBeCloseTo(2.3, 5);
    barracuda.length = 2.2; //* Teardown
})