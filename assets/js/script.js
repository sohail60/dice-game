console.log("Working");
alert("Working");

let roll=document.querySelector("#btn");
let winner=document.querySelector("#winner");

let player1_img=document.querySelector("#player1-img");
let player2_img=document.querySelector("#player2-img");

roll.addEventListener("click",function(){
    let random1=random();    
    let random2=random();
    
    switch (random1){
        case 1: player1_img.innerHTML=<img src="assets/images/dice1.png" alt="" id="player1-img"></img>
        break;
        case 2: player1_img.innerHTML=<img src="assets/images/dice2.png" alt="" id="player1-img"></img>
        break;
        case 3: player1_img.innerHTML=<img src="assets/images/dice3.png" alt="" id="player1-img"></img>
        break;
        case 4: player1_img.innerHTML=<img src="assets/images/dice4.png" alt="" id="player1-img"></img>
        break;
        case 5: player1_img.innerHTML=<img src="assets/images/dice5.png" alt="" id="player1-img"></img>
        break;
        case 6: player1_img.innerHTML=<img src="assets/images/dice6.png" alt="" id="player1-img"></img>
        break;
    }

    switch (random2){
        case 1: player2_img.innerHTML=<img src="assets/images/dice1.png" alt="" id="player2-img"></img>
        break;
        case 2: player2_img.innerHTML=<img src="assets/images/dice2.png" alt="" id="player2-img"></img>
        break;
        case 3: player2_img.innerHTML=<img src="assets/images/dice3.png" alt="" id="player2-img"></img>
        break;
        case 4: player2_img.innerHTML=<img src="assets/images/dice4.png" alt="" id="player2-img"></img>
        break;
        case 5: player2_img.innerHTML=<img src="assets/images/dice5.png" alt="" id="player2-img"></img>
        break;
        case 6: player2_img.innerHTML=<img src="assets/images/dice6.png" alt="" id="player2-img"></img>
        break;
    }

    if(random1>random2){
        winner=InnerText("Player 1 Wins!!");
    }
    else if(random1<random2){
        winner=InnerText("Player 2 Wins!!");
    }
    else{
        winner=InnerText("Draw, Roll once again!!");
    }
});








function  random(){
    return Math.floor(Math.random()*6+1);
}