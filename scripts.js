let homeScore = document.getElementById("home-score")
homepoint = 0

let guestScore = document.getElementById("guest-score")
guestpoint = 0

//Home Points

function add1pointhome(){
    homepoint += 1
    homeScore.textContent = homepoint
}

function add2pointhome(){
    homepoint += 2
    homeScore.textContent = homepoint
}

function add3pointhome(){
    homepoint += 3
    homeScore.textContent = homepoint
}

//Guest Points

function add1pointguest(){
    guestpoint += 1
    guestScore.textContent = guestpoint
}

function add2pointguest(){
    guestpoint += 2
    guestScore.textContent = guestpoint
}

function add3pointguest(){
    guestpoint += 3
    guestScore.textContent = guestpoint
}

//rest

function rsthome(){
    homepoint = 0
    homeScore.textContent = homepoint
}

function rstguest(){
    guestpoint = 0
    guestScore.textContent = guestpoint
}