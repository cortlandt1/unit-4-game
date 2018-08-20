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
 $('.crystal').append(`
 data-crystal=${Math.floor(Math.random() * 25) + 1 }
 `)

//  $('.crystal').data (function() {
    
//  })





$('.crystal').on('click', function (){
    let crystalValue = $('.crystal').attr('data-crystal')
    currentScore += parseInt(crystalValue)
    $('.scoreTotal').text(currentScore)
})

console.log(currentScore)