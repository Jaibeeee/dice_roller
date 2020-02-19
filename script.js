function rollTheDice (diceValue){
  
    /* Declare all variables */
    var yourRolls, numberOfRolls, proficiencyModifier, randomNumberSum, totalRollValue, diceRoll, printRolls, printText, rollHistoryElement, historyRoll
    
    /* Set the values for the numberOfRolls, proficiencyModifier and randomNumberSum */
    numberOfRolls = document.querySelector('#roll-Number').value;
    proficiencyModifier = document.querySelector("#proficiency-Modifer").value
    randomNumberSum = 0;  
    yourRolls = document.getElementById('yourRolls');
    
    /* Removes all the child elements from the your yourRolls section.*/
    while (yourRolls.firstChild) {
        yourRolls.removeChild(yourRolls.firstChild);
    }
  
    /* Loops through a random number generator variable and adds them to a total sum. */
    for(var i = 0; i < numberOfRolls; i++){
      
        diceRoll = Math.floor(Math.random() * diceValue) + 1; /* random number */
      
        randomNumberSum = randomNumberSum + diceRoll; /* create a running total of the randomly generated numbers */

        totalRollValue = Number(randomNumberSum) + Number(proficiencyModifier); /* adds the Proficiency Modifer to the Roll Total.  */
      
        console.log("random Number " + diceRoll); /* console log the random numer to check */

        /* this peice of code creates a <p> element, and assigns the diceRoll value to that element, then appends it to the yourRolls div */
        printRolls = document.createElement('div');
        printRolls.innerHTML = diceRoll + ",";
        document.querySelector('#yourRolls').appendChild(printRolls);
        /* ###  delete the last , from the  ###*/
    }
    
    /* Print out the current roll - Is updated each time.*/
    document.querySelector('#output').innerHTML = (numberOfRolls + "(d" + diceValue + ")" + " + " + proficiencyModifier + " = " + totalRollValue);
    
    console.log('Number of Rolls ' + numberOfRolls);
    console.log('Roll Total ' + randomNumberSum);
  
    /* Roll History - I want this to include the total, and what each roll was.*/
    rollHistoryElement = document.createElement('p');
    historyRoll = document.createTextNode((numberOfRolls + "(d" + diceValue + ")" + "+" + proficiencyModifier + " = " + totalRollValue));
    rollHistoryElement.appendChild(historyRoll);
    document.querySelector('#rollHistory').appendChild(rollHistoryElement);
    
  }