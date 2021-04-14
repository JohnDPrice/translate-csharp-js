// Put your code here
let names = ["Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log("All Place Names")

// Iterate over each "name" in the "names" list
names.forEach(name => {
    console.log(name)
})

console.log("")
let theNames = []
  names.filter(name => {
    if(name.startsWith("The")){
        theNames.push(name)
    }
})

console.log("'The' Place Names")
theNames.forEach(name => {
    console.log(name)
})