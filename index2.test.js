const index = require("./index")

const capybara = index.capybara

test("Capybara will survive the bite", () => {
    capybara.bitten(); //* Setup
    expect(capybara.alive).toBe(true);
})

test("Capybara is injured after bite", () => {
    capybara.bitten(); //* Setup
    expect(capybara.injured).toBe(true);
    capybara.injured = false; //* Teardown
})

test("Capybara is dead from over eating", () => {
    capybara.speed = 4; //* Setup
    capybara.weightGain(); //* Setup
    expect(capybara.alive).toBe(false);
    capybara.alive = true; //* Teardown
})

test("That weight gain decreases speed", () => {
    capybara.speed = 45; //* Setup
    capybara.weightGain(); //* Setup
    expect(capybara.speed).toBe(25)
    capybara.speed = 16; //* Teardown
})

platypus = new index.Mammals("Platypus", 0.2, 62, 28)

test("Whether Platypus is an instance of Mammal class", () => {
    expect(platypus).toBeInstanceOf(index.Mammals) 
})

test("That the Platypus is not injured when created", () => {
    expect(platypus.injured).toBeFalsy()
})