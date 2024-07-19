const Department = require("../models/department");

const departments = [
  {
    name: "Computer Science",
    head_of_department: "Dr. Alice Johnson",
    office_location: "Building A, Room 201",
    phone_number: "+1234567890",
    establishment_date: "2000-09-01T00:00:00.000Z",
    budget_allocated: 500000,
    description: "Department focusing on computer science and engineering.",
  },
  {
    name: "Mathematics",
    head_of_department: "Prof. Robert Smith",
    office_location: "Building B, Room 302",
    phone_number: "+0987654321",
    establishment_date: "1995-04-15T00:00:00.000Z",
    budget_allocated: 300000,
    description: "Department specializing in pure and applied mathematics.",
  },
  {
    name: "Physics",
    head_of_department: "Dr. Emily Davis",
    office_location: "Building C, Room 105",
    phone_number: "+1122334455",
    establishment_date: "1988-06-10T00:00:00.000Z",
    budget_allocated: 400000,
    description: "Department focused on theoretical and experimental physics.",
  },
  {
    name: "Chemistry",
    head_of_department: "Prof. Michael Brown",
    office_location: "Building D, Room 208",
    phone_number: "+2233445566",
    establishment_date: "2002-11-20T00:00:00.000Z",
    budget_allocated: 350000,
    description: "Department dedicated to chemical sciences and research.",
  },
  {
    name: "Biology",
    head_of_department: "Dr. Sarah Lee",
    office_location: "Building E, Room 307",
    phone_number: "+3344556677",
    establishment_date: "1999-03-25T00:00:00.000Z",
    budget_allocated: 450000,
    description: "Department focusing on biological sciences and ecology.",
  },
  {
    name: "Engineering",
    head_of_department: "Prof. William Martinez",
    office_location: "Building F, Room 410",
    phone_number: "+4455667788",
    establishment_date: "2001-08-30T00:00:00.000Z",
    budget_allocated: 600000,
    description:
      "Department covering various branches of engineering and technology.",
  },
  {
    name: "Economics",
    head_of_department: "Dr. Jessica Wilson",
    office_location: "Building G, Room 102",
    phone_number: "+5566778899",
    establishment_date: "2010-07-15T00:00:00.000Z",
    budget_allocated: 280000,
    description:
      "Department specializing in economic theories and applications.",
  },
  {
    name: "History",
    head_of_department: "Prof. David Anderson",
    office_location: "Building H, Room 210",
    phone_number: "+6677889900",
    establishment_date: "1985-12-05T00:00:00.000Z",
    budget_allocated: 220000,
    description: "Department focused on historical research and education.",
  },
  {
    name: "Psychology",
    head_of_department: "Dr. Laura Thomas",
    office_location: "Building I, Room 310",
    phone_number: "+7788990011",
    establishment_date: "2005-05-20T00:00:00.000Z",
    budget_allocated: 330000,
    description:
      "Department dedicated to the study of psychology and mental health.",
  },
  {
    name: "Philosophy",
    head_of_department: "Prof. Christopher Lee",
    office_location: "Building J, Room 405",
    phone_number: "+8899001122",
    establishment_date: "1990-09-10T00:00:00.000Z",
    budget_allocated: 270000,
    description: "Department exploring philosophical theories and thought.",
  },
];

const departmentSeeder = async () => {
  const departmentsData = await Department.find();
  if (departmentsData.length === 0) {
    await Department.insertMany(departments);
    console.log("Department seed data inserted");
  } else {
    console.log("Department seed data already exists");
  }
};

module.exports = departmentSeeder;
