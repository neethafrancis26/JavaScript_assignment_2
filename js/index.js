// Question 1:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// ​Console this star pattern
let n = 5;
for (let i= 1; i <= n; i++){
    let space = "";
    for(let j = 1; j <= n-i; j++){
        space += " ";
    }
    for(let k = 1; k <= i; k++){
        space += "* ";
    }
    console.log(space);
}

// Question 2: ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and console each item by using switch statement.
let items = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ];
items.map((item)=>{
    switch (item){
        case 'car':console.log("item: car");
                   break;
        case 1:console.log("item: 1");
                break;
        case 5:console.log("item: 5");
                break;
        case 'js':console.log("item: js");
                    break;
        case 'node js':console.log("item: node js");
                   break;
        case 'mysql':console.log("item: mysql");
                   break;
        case 'sql':console.log("item: sql");
                   break;
        default :console.log("Please eneter a correct input");
    }
});

// Question 3:[1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
const myArray = [1, 2, 3, 4.5, 6];
console.log(`Array: ${myArray}`);
function arrays(arr){
    return function(removeIndex){
        removeIndex.forEach(index => {
            arr.splice(index, 1); 
        });
        return arr;
    }
}
const MyNewArray = arrays(myArray);
let resultArray = MyNewArray([5, 2]);
console.log(`New array: ${resultArray}`);

// Question 4: Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)
let arr =[1, "emily", 4, 'john', 5, 'Joey'];
function myArrays(arr){
    this.elements = arr;
    this.newclassconstructor = function(){ 
        this.elements.forEach(Element =>{
        console.log(Element);
        });
    }
}
let constArray = new myArrays(arr);
constArray.newclassconstructor();

// Question 5: Create a self-invoking function to console you name.
let myName = "Neetha Francis";
(function(name){
    console.log(`${name}`);
})(myName);