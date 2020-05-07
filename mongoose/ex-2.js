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
        .find({ isPublished: true, tags: {$in: ['frontend', 'backend']} })
        // .or([ {tags: 'frontend'}, {tags: 'backend'} ])
        .sort({ price: -1 })
        .select({ name: 1, author: 1 , price: 1});
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();
