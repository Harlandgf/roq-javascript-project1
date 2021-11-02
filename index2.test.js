const index = require("./index")

const capybara = index.capybara

test("Capybara will survive the bite", () => {
    capybara.bitten()
    expect(capybara.alive).toBe(true)
})

test("Capybara is injured after bite", () => {
    capybara.bitten()
    expect(capybara.injured).toBe(true)
})

test("Capybara is dead from over eating", () => {
    capybara.speed = 4
    capybara.weightGain()
    expect(capybara.alive).toBe(false)
})

test("That weight gain decreases speed", () => {
    capybara.speed = 45
    capybara.weightGain()
    expect(capybara.speed).toBe(25)
})