const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = '5a96b71a10fdd481b324c98d';

Todo.find({
	text: "Test todo"
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	text: "Test todo"
}).then((todo) => {
	console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
	console.log('Todo', todo);
});