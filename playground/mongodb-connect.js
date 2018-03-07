const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://emil:emil@ds139436.mlab.com:39436/node-course-todos', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}


	console.log('Connected to MongoDB server');

	// db
	// 	.collection('Todos')
	// 	.drop();

	db
		.collection('Todos')
		.insertOne({
			text: 'Make Shake',
			completed: false,
			completedAt: 556447
		}, (err, result) => {
			if(err) {
				return console.log('Unable to insert todo', err);
			}
			console.log(JSON.stringify(result.ops, undefined, 2));
		});

	// db
	// 	.collection('Users')
	// 	.insertOne({
	// 		name: 'Milen',
	// 		age: 22,
	// 		location: 'Bulgaria'
	// 	}, (err, result) => {
	// 		if(err) {
	// 			return console.log('Unable to insert user', err);
	// 		}

	// 		console.log(JSON.stringify(result.ops, undefined, 2));
	// 	});

	db.close();
});