
const index = require("./index")



const crocodile = index.crocodile

test('That eating decreases hunger', () => {
    crocodile.hunger = 15; //* Setup
    crocodile.eat(); //* Setup
    expect(crocodile.hunger).toBe(5);
    crocodile.hunger = 50; //* Teardown
})

test('Sunbathing increases temperature', () => {
    crocodile.temperature = 0; //* Setup
    crocodile.sunbathe(); //* Setup
    expect(crocodile.temperature).toBe(15);
    crocodile.temperature = 23; //* Teardown
})

test('starve does not decrease hunger', () => {
    crocodile.hunger = 15; //* Setup
    crocodile.starve(); //* Setup
    expect(crocodile.hunger).toBe(40)
    crocodile.hunger = 50; //* Teardown
})

test('pass away changes alive', () => {
    crocodile.passAway() //* Setup
    expect(crocodile.alive).toBe(false);
    crocodile.alive = true; //* Teardown
})

blueTongueLizard = new index.Reptiles("Blue Tongue Lizard", 78, 67); //* Setup new test instance

test('That Blue Tongue Lizard cools off', () => {
    blueTongueLizard.cool(); //* Setup
    expect(blueTongueLizard.temperature).toBe(57);
    blueTongueLizard.temperature = 67; //* Teardown
})

test('That Blue Tongue lizard is Labelled', () => {
    expect(blueTongueLizard.animal).toBe("Blue Tongue Lizard")
})