const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/courses-server');

const courseSchema = new mongoose.Schema({
    _id: String,
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course
        .find({ isPublished: true})
        .or([
            {price: {$gte: 250}},
            {name: /.*master.*/i}
        ])
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();
