
const { test } = require("picomatch")
const index = require("./index")

test('That eating decreases hunger', () => {
    index.crocodile.hunger = 15
    index.crocodile.eat()
    expect(index.crocodile.hunger).toBe(5)
})

test('Sunbathing increases temperature', () => {
    index.crocodile.temperature = 0
    index.crocodile.sunbathe()
    expect(index.crocodile.temperature).toBe(15)
})

test('starve does not decrease hunger', () => {
    index.crocodile.hunger = 15
    index.crocodile.starve
    expect(index.crocodile.hunger).not.toBe(lessThan (15))
})

test('pass away changes alive', () => {
    index.crocodile.passAway()
    expect(index.crocodile.alive).toBe(false)
})

test()