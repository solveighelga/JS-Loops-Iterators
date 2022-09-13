/* Here I generated my code that I get in https://codebeautify.org/jsonviewer 
Each person is represented by an object in an array*/

const student = [
    {
      id: 1,
      name: "Lockwood Lanphere",
      birthdate: new Date("8/1/1953"),
      children: 3,
      country: "Venezuela",
      canProgram: false
    },
    {
      id: 2,
      name: "Rog Bellard",
      birthdate: new Date("5/12/1974"),
      children: 4,
      country: "Latvia",
      canProgram: true
    },
    {
      id: 3,
      name: "Perrine Neads",
      birthdate: new Date("7/1/2002"),
      children: 1,
      country: "Russia",
      canProgram: true
    },
    {
      id: 4,
      name: "Harmonie Pohl",
      birthdate: new Date("5/28/1997"),
      children: 1,
      countr: "China",
      canProgram: false
    },
    {
      id: 5,
      name: "Glory Pressnell",
      birthdate: new Date("8/4/1992"),
      children: 5,
      country: "Russia",
      canProgram: true
    },
    {
      id: 6,
      name: "Bartholomew Chavey",
      birthdate: new Date("6/28/1952"),
      children: 5,
      country: "China",
      canProgram: false
    },
    {
      id: 7,
      name: "Fredek Silson",
      birthdate: new Date("2/3/1973"),
      children: 5,
      country: "Malawi",
      canProgram: false
    },
    {
      id: 8,
      name: "Guillaume Manicomb",
      birthdate: new Date("11/20/1994"),
      children: 3,
      country: "China",
      canProgram: false
    },
    {
      id: 9,
      name: "Clarisse Ashwell",
      birthdate: new Date("1/6/1955"),
      children: 5,
      country: "Russia",
      canProgram: false
    },
    {
      id: 10,
      name: "Kendricks Healeas",
      birthdate: new Date("4/17/2000"),
      children: 3,
      country: "Brazil",
      canProgram: true
    }
  ]
  console.log(student);

// Outputs how many children all people have, in total (Ex.: Bia has 2 kids, Paul has 3, so the total 5)
let result = 0; // starting the count from zero


for (let i=0; i<student.length; i++) { // I set i=0 because I want my loop to start there. next I want to condition where my loop should end. And the last one indicates that I want to add on to it or go up.
   result = student[i].children + result;
}
console.log("The sum of all children is:", result);

/* Outputs one string per person formatted as such (Name: Age) */
for (let i=0; i<student.length; i++) {
    console.log(student[i].name + ":", 2022 - student[i].birthdate.getFullYear()); // student name + ":" to add the semicolon. After that I added a comma to have some space between the birthdate. To get the exact age I did the current year minus the fullYear of the students birthdate.
}

/* Output all properties of all people using for…in */
for (let i=0; i<student.length; i++) {
    console.log(" "), // make break between the properties
    console.log("Name:" + student[i].name),
    console.log("Birthdate:" + student[i].birthdate.toDateString()), // clean birthdate
    console.log("Children:" + student[i].children),
    console.log("Country:" + student[i].country),
    console.log("Can Program:" + student[i].canProgram),
    console.log(" ")
} 