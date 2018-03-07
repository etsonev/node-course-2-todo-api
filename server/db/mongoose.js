let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://emil:emil@ds139436.mlab.com:39436/node-course-todos');

module.exports = {
	mongoose
};