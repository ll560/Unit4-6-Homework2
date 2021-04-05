//Homework Part One

//Using what you did with Objects perdiod 2 from the slides, create a personal profile. Instead of Products you will need to create a personal profile. Initialize Constructors and More!
//Step 1
function Profile(name, monthOfBirth, hobbies, location){
    this.monthOfBirth = monthOfBirth;
    this.name = name;
    this.hobbies = hobbies;
    this.location = location;
}



//Step 2
//create object
let personalProfile = new Profile('Lisa', 2, 'coding')



//Step 3
let personalProfile1 = new Profile('John', 3, 'running')

let personalProfile2 = new Profile('Kim', 4, 'reading')

let personalProfile3 = new Profile('Sam', 5, 'biking')

//Step 4
function Lives(cityName, location){ 
    this.cityName = cityName;
    this.location = location;

}

//add new objects lives1-2-3
let lives1 = new Friend('Boston', false);
let lives2 = new Friend('Cambridge', true);
let lives3 = new Friend('Quincy', false);
console.log(lives1, lives2, lives3);

//Step 5


//Step 6
let completeProfile1 = new Profile('John', 3, 'running', lives1)

let completeProfile2 = new Profile('Kim', 4, 'reading', lives2)

let completeProfile3 = new Profile('Sam', 5, 'biking', lives3)
// Step 7
completeProfile3.favoriteFood = "apples";

// Step 8


//.Create

//Step 1
let myProfile = {
    type: 'Lisa',
    displyType: function(){
        console.log(this.type);
    }
};

myProfile.displayType();

//Step 2
let PersonalProfile1 = Object.create(myProfile);
PersonalProfile1.displayType();

//Step 3
let ownsPet = Object.create(PersonalProfile1);
ownsPet.type = 'Dog';
ownsPet.displayType();


//Array vs Objects

//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.

//Use dot notation to return hobby description

//Use bracket notation to return name


//Arrays: Create an array with 4 different hobbies


//access second item in the array

//Objects
//Change the value of the boolean of the object we created.

//Add a new property to our person object such as supplies with multiple values in the property.

//remove the hobby description property from the person object


//Arrays
//Use push to add another hobby to your array of hobbies


//use pop to remove the last item from an hobby array


//use unshift to add more values to the beginning of the hobby array.

// us shift to remove the item from the hobby of the array

//Object
//Write a for in loop for the person object you created

//Write a for each loop for your person Object


//Arrays
//Write a for loop for your hobby array

//Write a for of loop for your hobby array

//write a for each loop for your hobby array




