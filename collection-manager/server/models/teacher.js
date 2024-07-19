const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
    },
    hire_date: {
        type: Date,
        required: true,
    },
},
{
    strict: true,
    versionKey: false,
    timestamps: true,
});

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
