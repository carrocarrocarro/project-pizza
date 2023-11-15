/* This script is using if statements */

// Variables
let userName;
let typeOfFood;
let typeOfMeal;
let age;
let cost;

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

//Step 2 - User name
userName = prompt(`What's your name?`);
choiceTypeOfFood();

// Step 2 - Food choice
function choiceTypeOfFood() {
  typeOfFood = prompt(
    `Thank you ${userName}. What would you like to eat? Please input a number based on your choice (1-3).
    1. Pizza
    2. Pasta
    3. Salad
    `
  );
  // converting the input to lowercase
  typeOfFood = typeOfFood.toLowerCase();

  //if the user picks pizza
  if(typeOfFood === "1" || typeOfFood === "pizza") {
    typeOfFood = "pizza"; 
  }
  //if the user picks pasta
  else if(typeOfFood === "2" || typeOfFood === "pasta") {
    typeOfFood = "pasta";
  }
  //if the user picks salad
  else if(typeOfFood === "3" || typeOfFood === "salad") {
    typeOfFood = "salad";
  }
  //if the user does not input 1,2,3,pizza, pasta or salad
  else {
    alert(`Opps, wrong input. Make sure to input your choice with corresponding number (1,2 or 3) or the name (pizza, pasta or salad).`);
    choiceTypeOfFood();
  }

  alertTypeOfFood(typeOfFood); // calling an alert function
  choiceTypeOfMeal(typeOfFood); //Calling the function for chosing type of meal based

}

// alert function
function alertTypeOfFood(typeOfFood) {
  alert(`Great choice, lets see what kind of ${typeOfFood} you want.`)
}

// Step 3 – Type of meal
function choiceTypeOfMeal(typeOfFood) {
  // if the user picked pizza
  if(typeOfFood === "pizza") {
    typeOfMeal = prompt(
    `
    What kind of pizza would you like?
    1. Margarita
    2. Prosciutto
    3. Hawaii
    `
    );
    
    // converting the string to lowercase
    typeOfMeal = typeOfMeal.toLowerCase();
    
    //if margarita
    if(typeOfMeal === "1" || typeOfMeal === "margarita") {
      cost = 95;
      typeOfMeal = "margarita";
      alert(`Pizza ${typeOfMeal} is great choice`);
      checkIfKidsOrAdultPortion(cost);
    }// if prosciutto 
    else if(typeOfMeal === "2" || typeOfMeal === "prosciutto") {
      cost = 120;
      typeOfMeal = "prosciutto"
      alert(`Pizza ${typeOfMeal} is great choice`);
      checkIfKidsOrAdultPortion(cost);
    } // if hawaii 
    else if(typeOfMeal === "3" || typeOfMeal === "hawaii") {
      cost = 115;
      typeOfMeal = "hawaii"
      alert(`Pizza ${typeOfMeal} is great choice`);
      checkIfKidsOrAdultPortion(cost);
    } //if wrong input
    else {
      alert(`Opps, wrong input. Make sure to input your choice with corresponding number (1,2 or 3) or the name of the pizza.`);
      choiceTypeOfMeal(typeOfFood);
    }

  
  } 
  //if pasta
  else if(typeOfFood === "pasta") {
    typeOfMeal = prompt(
    `
    What kind of pasta would you like?
    1 - Pesto
    2 - Cabonara
    3 - Bolognese
    `
    );
    
    // converting string to lowercase
    typeOfMeal = typeOfMeal.toLowerCase();
    
    //if pesto
    if(typeOfMeal === "1" || typeOfMeal === "pesto") {
      cost = 90;
      typeOfMeal = "pesto";
      alert(`Pasta ${typeOfMeal} is great choice`);
      checkIfKidsOrAdultPortion(cost);
    } //if cabonara 
    else if(typeOfMeal === "2" || typeOfMeal === "cabonara") {
      cost = 105;
      typeOfMeal = "cabonara";
      alert(`Pasta ${typeOfMeal} is great choice`);
      checkIfKidsOrAdultPortion(cost);
    } //if bolognese 
    else if(typeOfMeal === "3" || typeOfMeal === "bolognese") {
      cost = 99;
      typeOfMeal = "bolognese";
      alert(`Pasta ${typeOfMeal} is great choice`);
      checkIfKidsOrAdultPortion(cost);
    } //if wrong input
    else {
      alert(`Opps, wrong input. Make sure to input your choice with corresponding number (1,2 or 3) or the name of the pasta.`);
      choiceTypeOfMeal(typeOfFood);
    }

  } //if salad 
  else if(typeOfFood === "salad") {
    typeOfMeal = prompt(
      `
      What kind of salad would you like?
      1 - Greek salad
      2 - Caesar salad
      3 - Green salad
      `
      );

    //converting the string to lowercase
    typeOfMeal = typeOfMeal.toLowerCase();
    
    // if greek salad
    if(typeOfMeal === "1" || typeOfMeal === "greek salad") {
      cost = 100;
      typeOfMeal = "greek salad";
      alert(`The ${typeOfMeal} is great choice`);
      checkIfKidsOrAdultPortion(cost);
    } 
    // if caesar salad
    else if(typeOfMeal === "2" || typeOfMeal === "caesar salad") {
      cost = 105;
      typeOfMeal = "caesar salad";
      alert(`The ${typeOfMeal} is great choice`);
      checkIfKidsOrAdultPortion(cost);
    } 
    // if green salad
    else if(typeOfMeal === "3" || typeOfMeal === "green") {
      cost = 110;
      typeOfMeal = "green salad";
      alert(`The ${typeOfMeal} is great choice, it's ${cost} kr.`);
      checkIfKidsOrAdultPortion(cost);
    }
    //if wrong input 
    else {
      alert(`Opps, wrong input. Make sure to input your choice with corresponding number (1,2 or 3) or the name of the salad.`);
      choiceTypeOfMeal(typeOfFood);
    }
    
  }
   
}



// Step 4 - Age
//function checking the age and if the user gets a kids portion or normal sized portion
function checkIfKidsOrAdultPortion(cost) {
  age = prompt(
    `What's your age? Please input a number (1-150 years).
    `
  );
  // converting the string to a number
  age = Number(age);
  
  // if 0 years old
  if(age === 0) {
    alert(`Please insert a number! (1-150 years)`);
    checkIfKidsOrAdultPortion(cost);
  }
  //if the user is 14 years old or younger
  else if(age <= 14){
    cost = cost * 0.75; // 25 % cheaper for a kids portion
    age = "kid";
    finalOrderKid(cost,typeOfMeal);
    
  } //if the user is 15 years old or older 
  else if(age >= 15) {
    age = "adult";
    finalOrderOld(cost,typeOfMeal);
  }
  //checking if it's not a number 
  else if(!/^[0-9]+$/.test(age)) {
    alert(`Please insert a number! (1-150 years)`);
    checkIfKidsOrAdultPortion(cost);
  }
  // if the user put in something else that's not a number
  else {
    alert(`Please insert a number! (1-150 years)`);
    checkIfKidsOrAdultPortion(cost);
  }

}

//Step 5 - Final order and order confirmation

//function for the final order if the user order a kids meal
function finalOrderKid(cost,typeOfMeal) {
  alert(`
    Great choice, you get a ${typeOfMeal} kids portion.
    Kids portion of ${typeOfMeal}: ${cost} kr
  `);
  let confirmation = prompt(`
    Are you happy happy with your order?
    Summary: 
    Kids portion of ${typeOfMeal}: ${cost} kr
  `);
  if(confirmation === "no") {
    orderConfirmationFalse();
  } else if( confirmation === "" || confirmation === null) {
    orderConfirmationFalseInput();
  }else if( confirmation.toLowerCase() === "yes") {
    orderConfirmationTrue();
  }

  else {
    orderConfirmationTrue();
  }   
}

// function for if the user ordered a normal adult meal
function finalOrderOld(cost,typeOfMeal) {
  alert(`
  Great choice, you get a ${typeOfMeal}.  
  Adult portion of ${typeOfMeal}: ${cost} kr 
  `);
  let confirmation = prompt(`
    Are you happy happy with your order?
    Summary: 
    Adult portion of ${typeOfMeal}: ${cost} kr 
    Please answer yes or no.
  `);
  if(confirmation === "no") {
    orderConfirmationFalse();
  } else if( confirmation === "" || confirmation === null) {
    orderConfirmationFalseInput();
  } 
  else if(confirmation.toLowerCase() === "yes") {
    orderConfirmationTrue();
  }
  else {
    orderConfirmationTrue();
  }
  
}


// Step 5 - Thank you message
function orderConfirmationTrue() {
  alert(`
      Thank you ${userName} 
      Your order being prepared! Enjoy your meal!
      Have a good day
  `);
}

// function for if the user not input yes or no
function orderConfirmationFalseInput() {

  alert(`
      Make sure you input yes or no!
  `);
  if(age === "kid") {
    cost = cost * 0.75;
    finalOrderKid(cost,typeOfMeal);
  } else if (age === "adult") {
    finalOrderOld(cost,typeOfMeal);
  }
}

// function for if the user not input yes or no
function orderConfirmationFalse() {
  alert(`
      If you are not happy with your order ${userName} , you are welcome back to make a new order. 

      Have a good day!
  `);
}
