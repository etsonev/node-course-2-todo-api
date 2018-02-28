const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	// db
	// 	.collection('Todos')
	// 	.findOneAndUpdate({
	// 		_id: new ObjectID('5a96f75751d7dc1198dea25c')
	// 	}, {
	// 		$set: {
	// 			completed: true
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	})
	// 	.then((result) => {
	// 		console.log(result);
	// 	});

	db
		.collection('Users')
		.findOneAndUpdate({
			_id: new ObjectID('5a96f8e8bb43cd12d465f2c0')
		}, {
			$set: {
				name: 'Melen'
			},
			$inc: {
				age: 1
			}
		}, {
			returnOriginal: false
		})
		.then((result) => {
			console.log(result);
		});
	
	// db.close();
});