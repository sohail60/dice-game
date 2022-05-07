console.log("Working");

let roll=document.querySelector("#btn");
let winner=document.querySelector("#winner");
let player1_img=document.querySelector("#player1-img");
let player2_img=document.querySelector("#player2-img");

roll.addEventListener("click",function(){
    console.log("clicked");
    // console.log(Math.floor(Math.random()*6+1));
        let random1=random();
        let random2=random();
        console.log(random1);
        console.log(random2);

    if(random1>random2){
        winner.textContent="Player 1 Wins!!";
    }
    else if(random1<random2){
        winner.textContent="Player 2 Wins!!";
    }
    else{
        winner.textContent="Draw, Roll once again!!";
    }

        if(random1===1){
            player1_img.src="assets/images/dice1.png"
        } else if(random1===2){
            player1_img.src="assets/images/dice2.png"
        } else if(random1===3){
            player1_img.src="assets/images/dice3.png"
        } else if(random1===4){
            player1_img.src="assets/images/dice4.png"
        } else if(random1===5){
            player1_img.src="assets/images/dice5.png"
        } else if(random1===6){
            player1_img.src="assets/images/dice6.png"
        }

        if(random2===1){
            player2_img.src="assets/images/dice1.png"
        } else if(random2===2){
            player2_img.src="assets/images/dice2.png"
        } else if(random2===3){
            player2_img.src="assets/images/dice3.png"
        } else if(random2===4){
            player2_img.src="assets/images/dice4.png"
        } else if(random2===5){
            player2_img.src="assets/images/dice5.png"
        } else if(random2===6){
            player2_img.src="assets/images/dice6.png"
        }
});

function  random(){
    return Math.floor(Math.random()*6+1);
}