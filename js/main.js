// Build array to contain sentences for randomizing

// On user submit, capture the number of paragraphs they would like display
	// randomize that number of items in the array
		// compose a paragraph of those randomized sentences
			// capitalize the first letter at the beginning of each paragraph

//	get the element from the page where we'd like to load the paragraphs 
// 	build the elements
//  load the paragraphs

// user inputs a request of 5 paragraphs
// create a loop that fires 5 times
	// in each loop, create a random math object between the numbers 1 and 10
		// put that in a variable and use it to pull that item based on index in the array

var gibberish = ['This is sentence one and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence two and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence three and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence four and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence five and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence six and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence seven and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence eight and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence nine and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence ten and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?'];

function buildSentences(sentReq) {
	var collectedSentences = '';
	for (var i = 0; i < sentReq; i++) {
		var randomizer = Math.floor((Math.random() * 9) +1);
		var sentence = gibberish[randomizer]; // pull a sentence at random
		collectedSentences += sentence + ' '; // add that random sentence to the collectedSentences variable
	}
	return collectedSentences;
}

function buildPara(paraReq, sentReq) {
	// loop that creates the number of paragraphs required and prints html to page
	for (var i = 0; i < paraReq; i++) {
		var collectedPara = '';
		// build the paragraph out of the sentences constructed above
		collectedPara += buildSentences(sentReq);
		// build the element for this paragraph and add it to the page
		var buildIpsum = document.getElementById('body-text');
		var elemP = document.createElement('p');
		var newText = document.createTextNode(collectedPara);
		elemP.appendChild(newText);
		buildIpsum.appendChild(elemP);
	}
	return collectedPara;
}

// buildPara(5, 9);


