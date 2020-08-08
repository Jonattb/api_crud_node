// Dependencies
// 
// Models
const Article = require('@model/Article');

module.exports = async (req, res) => {
	try {

		const id = req.params.id;

		const article = await Article.findById( id );

		if ( !article ){
			return res.status(404).json({
				code: 'not_found',
				message: 'Article not found'
			})
		}
		else {
			return res.status(200).json({
				article
			})
		}
	} catch( e ){
		console.log( e )
		return res.sendStatus(500);
	}
}