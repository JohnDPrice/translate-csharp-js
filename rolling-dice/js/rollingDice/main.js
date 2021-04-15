// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")

// Function to "roll" a die
// Generates a random number between 1 and 6
// Constructs a new Die object with the random number as it's value
const Roll = () => {
    let dieString = ""
    let dieValue = Math.random() * (6 - 1) + 1
    die = new Die(Math.round(dieValue))

    if(dieValue === 1){
        dieString = "\u2680"
    } else if(dieValue === 2){
        dieString = "\u2681"
    } else if(dieValue === 3){
        dieString = "\u2682"
    } else if(dieValue === 4){
        dieString = "\u2683"
    } else if(dieValue === 5){
        dieString = "\u2684"
    } else if(dieValue === 6){
        dieString = "\u2685"
    }

    const Die = {dieString, dieValue}
    return Die
}

for(let i = 0; i < 10; i++){
    let die1 = Roll()
    let die2 = Roll()

    let message = `${die1} + ${die2} == ${die1}`
}
