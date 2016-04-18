// arrays to load
	// rascist
	// misogynistic
	// general hatred

// var racism = [];
// var misogyny = [];
// var hatred = [];


var gibberish = ['This is sentence one and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence two and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence three and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence four and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence five and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence six and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence seven and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence eight and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence nine and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?', 'This is sentence ten and it goes on and on and on and on. Well it\'s still going ins\'t it? Who would believe it?'];

var gibberish2 = ['One Blah blah blah sentence from selection group 2; a little more a little less. Who freaking cares.', 'Two More nonsense from selection group 2 that carries on and on and on.', 'Three Selection group 2 here bozo; still carrying on for the sake of testing blah blah blah.', 'Four Blah blah blah sentence from selection group 2; a little more a little less. Who freaking cares.', 'Five Blah blah blah sentence from selection group 2; a little more a little less. Who freaking cares.', 'Six Blah blah blah sentence from selection group 2; a little more a little less. Who freaking cares.', 'Seven Blah blah blah sentence from selection group 2; a little more a little less. Who freaking cares.', 'Eight Blah blah blah sentence from selection group 2; a little more a little less. Who freaking cares.', 'Nine Blah blah blah sentence from selection group 2; a little more a little less. Who freaking cares.', 'Ten Blah blah blah sentence from selection group 2; a little more a little less. Who freaking cares.'];

function buildSentences(subSelect, sentReq) {
	var collectedSentences = '';
	var subjectChoice = '';
	// select an array to display from
	if (subSelect === 'racism') {
		subjectChoice = gibberish;
	} else {
		subjectChoice = gibberish2;
	}
	for (var i = 0; i < sentReq; i++) {
		var randomizer = Math.floor((Math.random() * 9) +1);
		var sentence = subjectChoice[randomizer]; // pull a sentence at random
		collectedSentences += sentence + ' '; // add that random sentence to the collectedSentences variable
	}
	return collectedSentences;
}

function buildPara(subSelect, paraReq, sentReq) {
	// loop that creates the number of paragraphs required and prints html to page
	for (var i = 0; i < paraReq; i++) {
		var collectedPara = '';
		// build the paragraph out of the sentences constructed above
		collectedPara += buildSentences(subSelect, sentReq);
		// build the element for this paragraph and add it to the page
		var buildIpsum = document.getElementById('body-text');
		var elemP = document.createElement('p');
		var newText = document.createTextNode(collectedPara);
		elemP.appendChild(newText);
		buildIpsum.appendChild(elemP);
	}
	return collectedPara;
}

function getInputs(e) {
	e.preventDefault();
	var subjectSelect = document.getElementById('subject').value;
	var numPara = document.getElementById('paragraphs').value;
	var numSent = document.getElementById('sentences').value;
	buildPara(subjectSelect, numPara, numSent);
}

var btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
	getInputs(e);
}, false);




