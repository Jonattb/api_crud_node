// Dependencies
const mongoose = require('mongoose');

// Get the mongo uri
const { mongo } = require('@config/database');

// Set the promise
mongoose.Promise = global.Promise;

module.exports = async () => {
	try {

		await mongoose.connect(mongo.uri, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		/*
		mongoose.Model.exists = async function( options ){
			let result = await this.findOne( options ).select("_id").lean();
			return result ? true : false;
		}*/

		console.log('[OK] Connected to the database.');

	} catch( err ){
		err && console.log( err );
		console.log('[ERROR] Could not connect to the database.');
		console.log('')
	}
}