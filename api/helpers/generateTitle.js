const faker = require('faker');

module.exports = ( str ) => {
	if( !str ){
		return faker.lorem.words();
	}

	return str;
}