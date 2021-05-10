document.getElementById('confirm').addEventListener('click', verifyAge)
// connects button to confirm age
let age = 0
// sets age to 0 as a variable
function verifyAge () {
  age = document.getElementById('age').value
  age = parseInt(age)
  // makes the age and integer
  if (age >= 17) {
    document.getElementById('text').innerHTML = 'You can see an R rated movie alone'
  } else if (age >= 13) {
    document.getElementById('text').innerHTML = 'You can see a PG-13 movie alone'
  } else if (age >= 5) {
    document.getElementById('text').innerHTML = 'You can see a G or PG movie alone'
  }
}// tells the user if they can watch the movie by checking it with the age they placed in the input
