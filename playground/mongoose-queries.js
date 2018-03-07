const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb').ObjectID;

let id = '5aa058196e94c716388f9671';

Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	text: "Make Shake"
}).then((todo) => {
	console.log('Todo', todo);
});

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo', todo);
// });