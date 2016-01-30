import ATV from 'atvjs';

import template from './template.hbs';
import searchTpl from './search.hbs';

function buildResults(doc, searchText) {

	//simple filter and helper function
	var regExp = new RegExp(searchText, "i");
	var matchesText = function(value) {
		return regExp.test(value);
	}

	//sample data for search example
	var movies = {
		"The Puffin": 1,
		"Lola and Max": 2,
		"Road to Firenze": 3,
		"Three Developers and a Baby": 4,
		"Santa Cruz Surf": 5,
		"Cinque Terre": 6,
		"Creatures of the Rainforest": 7
	};
	var titles = Object.keys(movies);

	//Create parser and new input element
	var domImplementation = doc.implementation;
	var lsParser = domImplementation.createLSParser(1, null);
	var lsInput = domImplementation.createLSInput();
	var results = [];

	//set default template fragment to display no results
	lsInput.stringData = ``;

	//Apply filter to titles array using matchesText helper function
	titles = (searchText) ? titles.filter(matchesText) : titles;

	for (let i = 0, len = titles.length; i < len; i++) {
		results.push({
			name: titles[i],
			image: `${ATV.launchOptions.BASEURL}assets/img/movies/movie_${movies[titles[i]]}.lcr`
		});
	}
	//overwrite stringData for new input element if search results exist by dynamically constructing shelf template fragment
	lsInput.stringData = searchTpl({titles: results});

	//add the new input element to the document by providing the newly created input, the context, 
	//and the operator integer flag (1 to append as child, 2 to overwrite existing children)
	lsParser.parseWithContext(lsInput, doc.getElementsByTagName("collectionList").item(0), 2);
}

let Page = ATV.Page.create({
	name: 'search',
	template: template,
	afterReady(doc) {
		let searchField = doc.getElementsByTagName('searchField').item(0);
		let keyboard = searchField && searchField.getFeature('Keyboard');

		if (keyboard) {
			keyboard.onTextChange = function() {
				let searchText = keyboard.text;
				console.log(`search text changed: ${searchText}`);
				buildResults(doc, searchText);
			};
		}
	}
});

export default Page;