function game(choice){
  let userChoice=choice;
  const compArray=["rock","paper","scissors"];
  console.log(compArray);
  let compChoice=compArray[parseInt((Math.random()*3))];
  console.log(compChoice);
  let playerScore=0;
  let computerScore=0;

  for(let i=0;i<=3;i++){
    if(userChoice==compChoice){
    msg="Draw"
    }
    else if(userChoice=="rock"){
      if(compChoice=="paper"){
      msg="Lose";
    }
    else{
      msg="Win";
    }
  }
  else if(userChoice=="paper"){
    if(compChoice=="scissors"){
      msg="Lose";
    }
    else{
      msg="Win";
    }
  }
  else if(userChoice=="scissors"){
    if(compChoice=="rock"){
      msg="Lose";
    }
    else{
      msg="Win";
    }
  }
  document.getElementById("message").innerHTML=msg;
  }
}
