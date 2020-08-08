// Dependencies
// 
// Models
const Article = require('@model/Article');

module.exports = async (req, res) => {
	try {

		const id = req.params.id;

		await Article.deleteOne({
			_id: id
		});

		return res.sendStatus(200);

	} catch( e ){
		console.log( e )
		return res.sendStatus(500);
	}
}