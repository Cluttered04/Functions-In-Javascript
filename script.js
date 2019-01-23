// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey

function chickenMonkey() {
    for(i = 0; i <=100; i++) {
        if(i % 5 === 0 && i % 7 === 0) {
            console.log("chickenMonkey")
        } else if(i % 7 === 0) {
            console.log("Monkey") 
            } else if(i % 5 === 0) {
                console.log("Chicken")
            } else {
                console.log(i);
            }
        }
    }


// chickenMonkey();

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 0;
function bandOrder(name){
    bandNumber +=1; 
    console.log(`${name} ${bandNumber}`)
    }

bandOrder("Galactic Scum");
bandOrder("UnderDogs");


//Grilled Foods Exercise
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}
// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.

const cookedFood = [];
function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for(i = 0; i < foods.length; i++) {
    grill(foods[i]);
    console.log(foods[i]);
}



