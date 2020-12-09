/* 
1. Syntax
    List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.

    Example:

    // {} curly braces define the object.

*/

/* 
Answer: We store our object in a variable using const and providing it a name
        We assign our variable and object literal using curly brackets => {}
        Inside our curly brackets we assign our object key, value pairs => key: value
        We separate our key, value pairs using the comma => ,

        Object =>  const objectName = {
            key1: value1,
            key2: value2
        };
*/

////////////////////////////////////////////////////////////////

/* 
2. Me
    1. Create an empty object called me.
    2. Assign it properties for name, age, and email with corresponding values. Afterwards, logging the object should give the following output:
    
    {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}
    or
    {
        name: "Kristyn", 
        age: 98,
        email: "kristyn@foo.bar"
    }
    3. Using dot notation, log the name property in your object.
    4. Using bracket notation, update the value of age to be 1000 years old.
    5. Using dot notation, console.log() age to verify that it has been updated.
    6. Add a property to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
    7. Print the value of "place of residence"

*/

// Answer

const me = {
    name: 'Josh P',
    age: 30,
    email: 'jpardike@gmail.com'
};

console.log(me);

console.log(me.name);

me['age'] = 1000;

console.log(me.age);

me['place of residence'] = 'Seattle, WA';

console.log(me['place of residence']);

////////////////////////////////////////////////////////////////

/* 
3. Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
Given the slimer object, do the following:

    1. console.log() the name.
    2. change the type to 'creature'.
    3. Add a property to the object called age, and set its value to 6.
    4. console.log() the object to make sure type and age are what you want them to be.
    5. give the slimer a method to introduce himself, interpolating some of his properties. call the method.

*/

// Answer



////////////////////////////////////////////////////////////////

/* 
4. Ogres
Let's say you want to make an adventure where an adventurer and an ogre fight each other.

Spend a few minutes reading this question a couple times and thinking and pseudocoding before you actually write the code.

—> Write a very small program that will simulate a battle between your adventurer and an ogre.

The battle should play out automatically.
The ogre and adventurer will take turns attacking each other, and statistics will be shown after each attack.
The ogre's attacks should have random damage value, but the adventurer should always attack with the same value.
Whenever someone's hitpoints go below zero, the other person wins the battle.
Create objects and have them interact. Remember, you are modeling things from real life. So just like the characters you are modeling, your objects will have properties (qualities) and methods (things they can do).

how would you define your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?
how would you define an ogre? Your ogre will want hitpoints, right? (Right.)
How could you implement the "attack" functionalities? Should you do this by adding methods to the objects? Should those methods take parameters?
Use console.log() to show each attack, how many hitpoints the person being attacked loses, the updated stats for the ogre and the adventurer. At the end log the winner.
You can use a loop to make the game play out. (What kind of loop? How and when will it stop?)
Would it be helpful to create another object to control and keep track of other data that isn't specifically about the ogre or the adventurer? Like a game object maybe?
Doing this efficiently requires planning. If you just started coding immediately without thinking through what you're trying to do and planning, then you're doing it wrong. Timewise, programming is 75-90% planning, and 10-25% actually typing code.
*/

// Answer

function randomNumber() {
    return Math.floor(Math.random() * 2);
}

function lightRandNum() {
    return Math.floor(Math.random() * 6);
}

function heavyRandNum() {
    return Math.floor(Math.random() * 26);
}

function blockRandNum() {
    return Math.floor(Math.random() * 5);
}

function attack() {
    const strength = randomNumber();
    if (strength === 0) {
        return this.hitpoints = lightRandNum();
    } else {
        return this.hitpoints = heavyRandNum();
    }
}

const adventurer = {
    name: 'Smith',
    health: 100,
    attack: function() {
        const strength = randomNumber();
        if (strength === 0) {
            return adventurer.hitpoints = lightRandNum();
        } else {
            return adventurer.hitpoints = heavyRandNum();
        }
    },
    block: function() {
        const parry = blockRandNum();
        if (parry === 1) {
            adventurer.health = adventurer.health + Math.floor(ogre.hitpoints / 3);
        } else {
            adventurer.health -= ogre.hitpoints;
        }
    }
};

const ogre = {
    name: 'Danny',
    health: 100,
    attack: function() {
        const strength = randomNumber();
        if (strength === 0) {
            return ogre.hitpoints = lightRandNum();
        } else {
            return ogre.hitpoints = heavyRandNum();
        }
    },
    block: function() {
        const parry = blockRandNum();
        if (parry === 1) {
            ogre.health = ogre.health + Math.floor(adventurer.hitpoints / 3);
        } else {
            ogre.health -= adventurer.hitpoints;
        }
    }
};


function playGame() {
    while ((adventurer.health > 0) && (ogre.health > 0)) {
        adventurer.attack();
        ogre.attack();
        adventurer.block();
        ogre.block();
        console.log(`Smith's attack: ${adventurer.hitpoints}, Danny's attack: ${ogre.hitpoints}, Smith's Health: ${adventurer.health}, Danny's health: ${ogre.health}`);
    }
    
    if (adventurer.health <= 0) {
        console.log('Game Over. Danny Wins.');
    } else {
        console.log('Great job! You defeated the Ogre Danny!');
    }
}

playGame();

////////////////////////////////////////////////////////////////
