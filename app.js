let totalMoney = 0; 
function updateMoney(){
    document.getElementById("total-money").innerHTML = `TOTAL BALANCE: $ ${totalMoney}`;
}

function playGame(){
    alert(`Thank you for visiting our site and playing the game!`)
    document.getElementById("scissors-earn").disabled = true; 
    document.getElementById("lawnmower-earn").disabled = true;
    document.getElementById("fancy-lawnmower-earn").disabled = true;
    document.getElementById("students-earn").disabled = true;
    document.getElementById("start-game").disabled = true;
    updateMoney();
}

//  what to add in the function to get the alert saying, you have $10 and you can buy 2 scissor. 
// As more money we get, the alert should say the right amount of scissors instead of just you can buy a scissor??

function teethInc(){
    if (totalMoney < 4){
        totalMoney +=1;
        updateMoney();
        alert(`you now have ${totalMoney} dollars`)
    } else if (totalMoney >= 4 & totalMoney < 1000){
        totalMoney +=1
        updateMoney();
        alert(`you have ${totalMoney} dollars available to buy a scissor`) 
    } else{
        alert(`Game Over`)
    }
}

function buyScissors(){
  if(totalMoney >=5){
  totalMoney = totalMoney - 5;
  updateMoney();
  alert(`you now have ${totalMoney} dollars click the using scissors button`);
  document.getElementById("s-remove").innerHTML = "";
  document.getElementById("scissors-earn").disabled= false;
  } else {
      updateMoney();
      alert(`You need $5 more dollar to make this purchase`)
  }
}

function scissorsInc(){
  if(totalMoney < 20){ totalMoney +=5;
      updateMoney();
      alert(`you know have ${totalMoney} dollars`)
  }  else if (totalMoney >= 20 && totalMoney < 1000) {
      totalMoney +=5
          updateMoney();
          alert(`you now have ${totalMoney} dollars available to buy a lawnmower`)
      } else {
          updateMoney();
          alert(`Game Over!`)
      }
  }

  function buyLawnmower(){
    if(totalMoney >= 25){
    totalMoney = totalMoney -25;
    updateMoney();
    alert(`you now have ${totalMoney} dollars start using your lawnmower!`)
    document.getElementById("l-remove").innerHTML = "";
    document.getElementById("lawnmower-earn").disabled = false;
    } else {
        updateMoney();
        alert(`You will need $25 more dollar`)
    }
}

function lawnmowerInc(){
    if(totalMoney < 200){  totalMoney += 50;
        updateMoney();
        alert(`you now have ${totalMoney} dollars`) } else if (totalMoney >=200 && totalMoney < 1000){
            totalMoney +=50;
            updateMoney();
            alert(`you now have ${totalMoney} dollars you can purchase a fancy Lawnmower`)
            } else {
                updateMoney();
                alert(`Game Over!`)
            }
        }
        
        function buyFancyLawnmower(){
          if(totalMoney >= 250){
          totalMoney = totalMoney -250;
          updateMoney();
          alert(`you now have ${totalMoney} dollars start using your fancy lawnmower`)
          document.getElementById("fl-remove").innerHTML = "";
          document.getElementById("fancy-lawnmower-earn").disabled = false;
          } else{
              updateMoney();
              alert(`you will need $250 to purchase this tool`)
          }
      }
      
      
      function fancyLawnmowerInc(){
          if(totalMoney < 400){
              totalMoney += 100
              updateMoney();
              alert(`you now have ${totalMoney} dollars`)
          } else if (totalMoney >= 400 && totalMoney <1000){
              totalMoney +=100
              updateMoney();
          alert(`you now have ${totalMoney} dollars, you can now purchase some students`)
          } else {
              updateMoney();
              alert(`Game Over!`)
          }
      }

      function buyStudents(){
        if(totalMoney >=500){  totalMoney = totalMoney - 500;
            updateMoney();
            alert(`you now have ${totalMoney} dollars start using your students`)
            document.getElementById("st-remove").innerHTML = "";
            document.getElementById("students-earn").disabled = false;
            } else {
                updateMoney();
                alert(`you will need $500 to purchase this tool`)
            }
        }
        
      
        function studentsInc(){
            if(totalMoney < 750){  totalMoney += 250;
                updateMoney();
                alert(`you now have ${totalMoney} dollars`) 
            } else if (totalMoney <1000) {
                totalMoney +=250
                updateMoney();
                alert(`you have ${totalMoney} dollars & you Win!`) 
            } else{
                updateMoney();
                alert(`Game Over!`)
            }
        }