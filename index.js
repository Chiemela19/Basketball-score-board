// Home score section

let homeNum = document.getElementById("home-num")
let homeCount1 = 0


function homeScore1() {
    homeCount1 += 1
    homeNum.textContent = homeCount1
}


function homeScore2() {
    homeCount1 += 2
    homeNum.textContent = homeCount1
}


function homeScore3() {
   homeCount1 += 3
    homeNum.textContent = homeCount1
}

// Guest score section

let guestNum = document.getElementById("guest-num")
let guestCount1 = 0


function guestScore1() {
    guestCount1 += 1
    guestNum.textContent = guestCount1
}


function guestScore2() {
    guestCount1 += 2
    guestNum.textContent = guestCount1
}


function guestScore3() {
   guestCount1 += 3
    guestNum.textContent = guestCount1
}

//reset section 
function resetGame() {
    homeCount1 = 0
    guestCount1 = 0 
    homeNum.textContent = 0
    guestNum.textContent = 0
}