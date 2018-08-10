var firstName = prompt("FirstName: ");
var lastName = prompt("LastName: ");
var age = prompt("Age: ");
var height = prompt("Height: ");
var petName = prompt("PetName: ");

if (firstName[0] == lastName[0] && age > 20 && age < 30 && height > 169 && 'y' == petName[petName.length-1]) {
      console.log("Good job spy! you have passed the spy test")
}
