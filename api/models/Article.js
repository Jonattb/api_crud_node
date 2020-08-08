const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
	title: String,
	description: String,
	author: String,
	tags: Array
},
{
	timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);