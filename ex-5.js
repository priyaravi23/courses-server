const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/courses-server', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function deleteCourse(id) {
    const result = await Course.deleteOne({_id: id});
    console.log(result);
}

async function run() {
    await deleteCourse('5a68fdf95db93f6477053ddd');
}

run();