// Models
const Article = require('@model/Article');

// Helpers
const generateTitle = require('@helper/generateTitle');

module.exports = async (req, res) => {
	
	try {

		let {
			title,
			description,
			author,
			tags
		} = req.body;

		title = generateTitle( title );
		tags = tags.split(',');

		if( !description || !author || !tags.length ){
			return res.status(422).json({
				code: 'missing_data',
				message: 'Data is missing to process the request.'
			});
		}

		// Create a user document
		const article = new Article({
			title,
			description,
			author,
			tags
		});

		// save
		await article.save();

		return res.sendStatus( 200 );

	} catch( e ){
		console.log( e )
		return res.sendStatus(500);
	}

}