let homeScore = document.getElementById("Home-points");
let guestScore = document.getElementById("Guest-points");
let resetScore = document.getElementById("reset-button");
let count = 0;

homeScore.textContent = 0;
guestScore.textContent = 0;




function addOnePointsHome(){
    count += 1;
    homeScore.textContent = count;
    
}

function addTwoPointsHome(){
    count += 2;
    homeScore.textContent = count;
    
}

function addThreePointsHome(){
    count += 3;
    homeScore.textContent = count;
    
}

function addOnePointsGuest(){
    count += 1;
    guestScore.textContent = count;
    
}

function addTwoPointsGuest(){
    count += 2;
    guestScore.textContent = count;
    
}

function addThreePointsGuest(){
    count += 3;
    guestScore.textContent = count;
    
}

function resetScores(){
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    count = 0;
}


