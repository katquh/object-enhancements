function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName,
    }
  }


let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!",
}

const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }


// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

const createAnimal = (species, verb, sound) => (
    {species,
    [verb](){
        return sound;
    }
    }
);


const s = createAnimal("sheep", "bleet", "BAAAAaaaa")