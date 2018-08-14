
var studentName;
var studentRoster = [];
var selectedOption = "";

while(selectedOption != "quit"){

  selectedOption = prompt("Would you like to add, remove or display the class roster or otherwise quit?");
  if(selectedOption == "add"){
    var studentName = prompt("Name of person you'd like to add: ");
    addStudentToRoster(studentName);
  }else if (selectedOption == "remove") {
    var studentName = prompt("Name of person you'd like to remove: ");
    removeStudentFromRoster(studentName);
  }else if(selectedOption == "display"){
    displayStudentRoster();
  }
  else if (selectedOption == "quit"){
    alert("Goodbye");
  }
  else{
    alert("try again");
  }
}

function addStudentToRoster(studentName){
  studentRoster.push(studentName);
  return;
}

function removeStudentFromRoster(studentName){
  var indexOfStudentName = studentRoster.indexOf(studentName);
  studentRoster.splice(indexOfStudentName,1);
  return;
}

function displayStudentRoster(){
  console.log(studentRoster);
}
