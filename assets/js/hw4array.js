//Declare variables
var fruits = [];
var vegetable = [];
var food = [];
var fSize = [];
var vSize = [];


//Enter Fruit Array size
while (true){
    fSize = prompt("Enter Fruit Array size [3-10]: ");
    if (fSize >= 3 && fSize <= 10){
        break;
    } else {
        console.log("Min 3 - Max 10");
    }
}

//Insert elements in Fruit array
for(var x = 0; x <= fSize-1; x ++) {
    fruits[x] = prompt("Enter fruit name: ");
    if (fruits[x] == null) {break;} //End the loop if canceled
}

//Print Fruits array
console.log("Fruits array: ", fruits);

//Print First and Last element
console.log("First fruit: ", fruits[0]);
console.log("Last fruit: ", fruits[fSize-1]);

//Sort the array in descending order
fruits.sort();
fruits.reverse();
console.log("Reversed Fruits array: ", fruits);

//Print the 2nd element
console.log("2nd Fruit:", fruits[1]);

//Delete the First and Third element
console.log(fruits);
fruits.splice(0,1);
fruits.splice(1,1);
console.log(fruits);


//Enter Vegetable Array size
while (true){
    vSize = prompt("Enter Vegetable array size [3-10]: ");
    if (vSize >= 3 && vSize <= 10){
        break;
    } else {
        console.log("Min 3 - Max 10");
    }
}

//Insert elements in Vegetable array
for(var x = 0; x <= vSize-1; x ++) {
    vegetable[x] = prompt("Enter Vegetable name: ");
    if (vegetable[x] == null) {break;} //End the loop if canceled
}

//Print Vegetable array
console.log("Vegetable array: ", vegetable);

//Print First and Last element
console.log("First Vegetable: ", vegetable[0]);
console.log("Last Vegetable: ", vegetable[vSize-1]);

//Sort the array in descending order
vegetable.sort();
vegetable.reverse();
console.log("Reversed Vegetable array: ", vegetable);

//Print the 2nd element
console.log("2nd Vegetable:", vegetable[1]);

//Delete the First and Third element       
console.log(vegetable);
vegetable.splice(0,1);
vegetable.splice(1,1);
console.log(vegetable);

//Concat Fruits and Vegetables Array
food = fruits.concat(vegetable);

console.log(food);

function reverseString(str) {
    
    var charArray = str.split('');
  
    var reversedArray = charArray.reverse();
  
    var reversedString = reversedArray.join('');
  
    return reversedString;
  }

// Print Food array using for loop
console.log("Print Food Array 1 by 1: ")
for(var x = 0; x <= food.length-1; x++){
    var bool = "true";
    var item = food[x];
    var secondLetter = item[1];
    if (x%2 != 0){
        bool = "false";
    }

    

    console.log("Index", x," is", bool," and the food inside it is called ",
                food[x],". The word", food[x]," has", food[x].length,
                " letters and the second letter is ", secondLetter,
                ". If you reverse it, it becomes", reverseString(food[x]),".");
}

//Search for an element
var search = prompt("Search food: ");
for(var x = 0; x <= food.length-1; x++){
    if(search == food[x]){
        console.log("Food is found at index #", x);
        break;
    } else {
        console.log("Food not found");
    }
}

food[0] = "START";
food[food.length-1] = "END";

console.log(food);
