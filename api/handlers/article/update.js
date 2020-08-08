// Models
const Article = require('@model/Article');

// Helpers
const generateTitle = require('@helper/generateTitle');

module.exports = async (req, res) => {
	
	try {

		const id = req.params.id;

		let {
			title,
			description,
			author,
			tags
		} = req.body;

		let errors;

		const doc = {};

		if( title ){
			doc.title = title;
		}

		if( description ){
			doc.description = description;
		}

		if( author ){
			doc.author = author;
		}

		if( tags ){
			doc.tags = tags.split(',');;
		}

		// Guardar la coleccion
		await Article.updateOne(
		    { 
		    	_id: id
			}, 
		  	doc
		);

		return res.sendStatus( 200 );

	} catch( e ){
		console.log( e )
		return res.sendStatus(500);
	}

}