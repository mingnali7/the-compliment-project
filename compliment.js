let array = ["meow", "yo", "hey"]
console.log(array)
//console.log(random(array))
//let toggle = 0

function generateComp() {
  let text = array[Math.floor(Math.random() * array.length)]
  let comp = document.getElementById("compliment")
  comp.innerText = text
}
// let text = array[Math.floor(Math.random() * array.length)]
// let comp = document.getElementById("compliment")
// comp.innerText = text



// function mousePressed() {
//   let compliment = random(array)
//   text(compliment, 10, 50)
//   // toggle += 1
//   // if (toggle == 1) {
//   //   compliment = random(array)
//   // }
// }

// function draw() {

// }

// var items = ["a", "e", "i", "o", "u"]
// var objResults = {}
// for (var i = 0; i < 1000000; i++) {
//   var randomElement = items[Math.floor(Math.random() * items.length)]
//   if (objResults[randomElement]) {
//     objResults[randomElement]++
//   } else {
//     objResults[randomElement] = 1
//   }
// }
// console.log(objResults) The results are pretty randomized after 1000000 iterations: Object {
//   u: 200222,
//   o: 199543,
//   a: 199936,
//   e: 200183,
//   i: 200116
// }