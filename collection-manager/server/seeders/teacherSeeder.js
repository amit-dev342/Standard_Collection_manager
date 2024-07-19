const Teacher = require("../models/teacher");

const teachers = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    date_of_birth: "1985-06-12",
    address: "123 Maple Street, Springfield, IL",
    phone_number: "+1-555-1234",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2020-03-15",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    date_of_birth: "1990-08-22",
    address: "456 Oak Avenue, Springfield, IL",
    phone_number: "+1-555-5678",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2019-11-05",
  },
  {
    name: "Carol Davis",
    email: "carol.davis@example.com",
    date_of_birth: "1982-12-30",
    address: "789 Pine Road, Springfield, IL",
    phone_number: "+1-555-8765",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2021-06-20",
  },
  {
    name: "David Wilson",
    email: "david.wilson@example.com",
    date_of_birth: "1995-03-14",
    address: "101 Birch Lane, Springfield, IL",
    phone_number: "+1-555-4321",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2022-01-10",
  },
  {
    name: "Eva Martinez",
    email: "eva.martinez@example.com",
    date_of_birth: "1988-09-05",
    address: "202 Cedar Street, Springfield, IL",
    phone_number: "+1-555-3456",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2018-07-23",
  },
  {
    name: "Frank Brown",
    email: "frank.brown@example.com",
    date_of_birth: "1992-04-10",
    address: "303 Elm Drive, Springfield, IL",
    phone_number: "+1-555-6789",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2017-05-17",
  },
  {
    name: "Grace Lee",
    email: "grace.lee@example.com",
    date_of_birth: "1987-11-25",
    address: "404 Fir Boulevard, Springfield, IL",
    phone_number: "+1-555-9876",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2016-12-30",
  },
  {
    name: "Henry Wilson",
    email: "henry.wilson@example.com",
    date_of_birth: "1993-07-18",
    address: "505 Spruce Way, Springfield, IL",
    phone_number: "+1-555-2345",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2015-08-12",
  },
  {
    name: "Isabel White",
    email: "isabel.white@example.com",
    date_of_birth: "1991-05-23",
    address: "606 Willow Path, Springfield, IL",
    phone_number: "+1-555-3456",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2014-09-19",
  },
  {
    name: "Jack Thompson",
    email: "jack.thompson@example.com",
    date_of_birth: "1989-10-29",
    address: "707 Poplar Crescent, Springfield, IL",
    phone_number: "+1-555-4567",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2013-10-25",
  },
  {
    name: "Kara Harris",
    email: "kara.harris@example.com",
    date_of_birth: "1994-02-16",
    address: "808 Ash Court, Springfield, IL",
    phone_number: "+1-555-5678",
    department_id: "60b8d295c64f8e0d6c8f8b8f",
    hire_date: "2012-11-03",
  },
];

const teacherSeeder = async () => {
  const teachersData = await Teacher.find();
  if (teachersData.length === 0) {
    await Teacher.insertMany(teachers);
    console.log("Teacher seed data inserted");
  } else {
    console.log("Teacher seed data already exists");
  }
};

module.exports = teacherSeeder;
