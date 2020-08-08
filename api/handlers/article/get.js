// Dependencies
// 
// Models
const Article = require('@model/Article');

module.exports = async (req, res) => {
	try {

		const articles = await Article.find();

		if ( !articles.length ){
			return res.status(404).json({
				code: 'zero_articles',
				message: 'No saved articles'
			})
		}
		else {
			return res.status(200).json({
				articles
			})
		}
	} catch( e ){
		console.log( e )
		return res.sendStatus(500);
	}
} 