
// Write an interface named Student that accepts the follow element :
//  firstName, lastName, age), and location
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
// Two variables

const student1: Student = {
  firstName: "Wendy",
  lastName: "Munyasi",
  age: 27,
  location: "Nairobi, Kenya",
};

const student2: Student = {
  firstName: "Trizah",
  lastName: "Masaba",
  age: 26,
  location: "Nairobi, Kenya",
};

// Array of student
const studentsList: Array<Student> = [
  student1,
  student2,
];

// Using Javascript, render a table and for each elements
// array, append a new row to the table

function renderTable() {
  // Create table element
  const table = document.createElement("table");

  // Loop through students in the array

  for (const student of studentsList) {
    // Create a row for each student
    const row = document.createElement("tr");

    // Create a cell for the first name
    const firstNameCell = document.createElement("td");

    // Set the cell  content to the student's first name
    firstNameCell.textContent = student.firstName;

    // Append the cell to the row
    row.appendChild(firstNameCell);

    // Create a cell for the location
    const locationCell = document.createElement("td");

    // Set the cell's content to the student's location
    locationCell.textContent = student.location;

    // Appends cell to the row
    row.appendChild(locationCell);

    // Append  row to the table
    table.appendChild(row);
  }
  // Append the table to the body of the document
  document.body.appendChild(table);
}

// Call the renderTable function to render the table
renderTable();


