const Student = require("../models/student");

const students = [
  {
    name: "John Doe",
    rollnumber: "A001",
    address: "123 Elm Street, Springfield",
    marks: 85,
    percentage: 85.0,
  },
  {
    name: "Jane Smith",
    rollnumber: "A002",
    address: "456 Oak Avenue, Springfield",
    marks: 92,
    percentage: 92.0,
  },
  {
    name: "Alice Johnson",
    rollnumber: "A003",
    address: "789 Pine Road, Springfield",
    marks: 78,
    percentage: 78.0,
  },
  {
    name: "Bob Brown",
    rollnumber: "A004",
    address: "101 Maple Street, Springfield",
    marks: 88,
    percentage: 88.0,
  },
  {
    name: "Charlie Davis",
    rollnumber: "A005",
    address: "202 Birch Lane, Springfield",
    marks: 91,
    percentage: 91.0,
  },
  {
    name: "Diana Wilson",
    rollnumber: "A006",
    address: "303 Cedar Drive, Springfield",
    marks: 84,
    percentage: 84.0,
  },
  {
    name: "Edward Lee",
    rollnumber: "A007",
    address: "404 Cherry Circle, Springfield",
    marks: 77,
    percentage: 77.0,
  },
  {
    name: "Fiona Clark",
    rollnumber: "A008",
    address: "505 Willow Street, Springfield",
    marks: 89,
    percentage: 89.0,
  },
  {
    name: "George Harris",
    rollnumber: "A009",
    address: "606 Fir Road, Springfield",
    marks: 93,
    percentage: 93.0,
  },
  {
    name: "Hannah Martinez",
    rollnumber: "A010",
    address: "707 Spruce Avenue, Springfield",
    marks: 80,
    percentage: 80.0,
  },
];

const studentSeeder = async () => {
  const users = await Student.find();
  if (users.length === 0) {
    await Student.insertMany(students);
    console.log("Student seed data inserted");
  } else {
    console.log("Student seed data already exists");
  }
};

module.exports = studentSeeder;
