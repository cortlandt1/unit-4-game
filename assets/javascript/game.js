//variable to hold the current score
//variable to track the number of wins, and that can be updated as the game is played
//variable to track the number of losses, and that can be updated as the game is played
//variable that hold the target score, and is displayed as html
//create a function that randomly assigns a number amount to the crystals at the start of each game
//create a reset function that resets once the game is lost or won current score, target score and reassigns
// number amount to each crystal
//create conditions for winning and losing

let currentScore = 0
let wins = 0
let losses = 0
let targetScore = 0


//function to assign number to crystals
//  $('#crystal1').append(`
//  data-crystal=${Math.floor(Math.random() * 25) }
//  `)
// function displayScore () {
//     $('.goal').append(`Your target score to match is ${targetScore}`)
// }


//Creates the target score and appends it to the index.html
targetScore = Math.floor(Math.random() * 150) + 1
$('.goal').text(targetScore)

//Generates the random numbers for the crystals
let one = Math.floor(Math.random() * 25) + 1
let two = Math.floor(Math.random() * 25) + 1
let three = Math.floor(Math.random() * 25) + 1
let four = Math.floor(Math.random() * 25) + 1
$('.scoreTotal').text(currentScore);

//Functions for winning 
function win () {
    wins++
    alert('You Win!')
    $('.wins').text(wins)
    reset()
}
//Function for losing
function lose () {
    losses++
    alert('You lose!')
    $('.losses').text(losses)
    reset()
}

//Functions for click events and deciding whether you've won or
$('#crystal1').on('click', function (){
    currentScore = one + currentScore
    $('.scoreTotal').text(currentScore);
    if (currentScore == targetScore) {
        win()
    }
    else if (currentScore > targetScore) { 
        lose()
    }
})

$('#crystal2').on('click', function (){
    currentScore = two + currentScore
    $('.scoreTotal').text(currentScore);
    if (currentScore == targetScore) {
        win()
    }
    else if (currentScore > targetScore) { 
        lose()
    }
})

$('#crystal3').on('click', function (){
    currentScore = three + currentScore
    $('.scoreTotal').text(currentScore);
    if (currentScore == targetScore) {
        win()
    }
    else if (currentScore > targetScore) {
        lose()
    }
})

$('#crystal4').on('click', function (){
    currentScore = four + currentScore
    $('.scoreTotal').text(currentScore);
    if (currentScore == targetScore) {
        win()
    }
    else if (currentScore > targetScore) { 
        lose()
    }
})


function reset () {
    currentScore = 0
    one = Math.floor(Math.random() * 25) + 1
    two = Math.floor(Math.random() * 25) + 1
    three = Math.floor(Math.random() * 25) + 1
    four = Math.floor(Math.random() * 25) + 1
    targetScore = Math.floor(Math.random() * 150) + 1
    $('.scoreTotal').text(currentScore);
    $('.goal').text(targetScore)
    // $('.goal').append(`Your target score to match is ${targetScore}`)
}
// $('#crystal1').on('click', function (){
//     let crystalValue = $(this).attr('data-crystal')
//     crystalValue = parseInt(crystalValue)
//     crystalValue += currentScore
//     $('.scoreTotal').text(currentScore)
//     console.log(crystalValue)
// })




//  $('.crystal').data (function() {
    
//  })






