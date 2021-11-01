class Reptiles {
    constructor(animal, hunger, temperature,) {
        this.animal = animal;
        this.hunger = hunger;
        this.temperature = temperature;
        this.alive = true
    }

    // Eat decreases hunger
    eat(){
    this.hunger -= 10
    }

    // sunbathe increase temp
    sunbathe(){
     this.temperature += 15
    }

    // starve
    starve(){
        this.hunger += 25
    }

    //Pass away
    passAway(){
        this.alive = false
    }

    
        
}


class Mammals {
    constructor(animal, height, speed, hunger,) {
        this.animal = animal;
        this.height = height;
        this.speed = speed;
        this.hunger = hunger;
        this.alive = true
        this.injured = false
    }

    // Weight gain
    weightGain(){
        this.speed -+ 20
        if (this.speed<5)
        {this.alive = false}
    }

    // over eat
    overEat(){
        if (this.hunger = 0)
        {this.alive = false}
    }

    // grow
    grow(){
        this.height += 2
    }

    // train
    train(){
        this.speed += 10
        this.hunger =+15
    }
    
    // Mammal Bitten
    bitten(){
        if(this.speed<10)
        {this.alive = false}
        else{this.injured = true
        console.log("Survived bite")}
    }
}

class Fish {
    constructor(animal, length, whichOcean, strength) {
        this.animal = animal;
        this.length = length;
        this.whichOcean = whichOcean;
        this.caught = false;
        this.strength = strength;
        this.alive = true
    }

    //migrate
    migrate(){
        this.whichOcean = "Atlantic Ocean"
    }

    // Get caught
    caght(){
        this.caught = true
        this.alive = false
    }

    // grow in length
    growLonger(){
        this.length ++
    }

    //Evade capture
    gotAway(){
        this.strength += 5
    }
}

const crocodile = new Reptiles('Crocodile',50,23)

const rainbowSnake = new Reptiles('Rainbow Snake',67,13)

const capybara = new Mammals('Capybara',0.34, 16,27)

const tigerShark = new Fish('Tiger Shark',15,"Pacific",55)

const barracuda = new Fish('Barracuda', 2,'Indo-Pacific', 34 )

module.exports = {
    Reptiles,
    crocodile,
    rainbowSnake,
    Mammals,
    capybara,
    Fish,
    tigerShark,
    barracuda,
}