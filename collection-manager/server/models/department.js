const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    head_of_department: {
        type: String,
        required: true,
    },
    office_location: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    establishment_date: {
        type: Date,
        required: true,
    },
    budget_allocated: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
{
    strict: true,
    versionKey: false,
    timestamps: true,
});

const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;
