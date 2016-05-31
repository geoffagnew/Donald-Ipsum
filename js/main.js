
var racism = ['When Mexico sends its people, they’re not sending the best. They’re not sending you, they’re sending people that have lots of problems and they’re bringing those problems with us. They’re bringing drugs. They’re bring crime. They’re rapists… And some, I assume, are good people.', 'The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.', 'Donald J. Trump is calling for a total and complete shutdown of Muslims entering the United States until our country\'s representatives can figure out what is going on.', 'When these people walk in the room, they don’t say, ‘Oh, hello! How’s the weather? It’s so beautiful outside. Isn’t it lovely? How are the Yankees doing? Oh they’re doing wonderful. Great.’ [Asians] say, ‘We want deal!', '#JebBush has to like the Mexican illegals because of his wife.', 'So true. Jeb Bush is crazy, who cares that he speaks Mexican, this is America, English!!', 'Laziness is a trait in blacks.', 'I have a great relationship with the blacks. I’ve always had a great relationship with the blacks.', 'Our great African American President hasn\'t exactly had a positive impact on the thugs who are so happily and openly destroying Baltimore!'];

var misogyny = ['You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.', 'If I were running ‘The View’, I’d fire Rosie O’Donnell. I mean, I’d look at her right in that fat, ugly face of hers, I’d say ‘Rosie, you’re fired.’', 'You could see there was blood coming out of her eyes, blood coming out of her, wherever.', 'But she was gonna beat – she was favored to win and she got schlonged. She lost. I mean, she lost.', 'Heidi Klum. Sadly, she\'s no longer a 10.'];

var weird = ['I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.', 'My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.', 'All the women on The Apprentice flirted with me — consciously or unconsciously. That’s to be expected.', 'I watched when the World Trade Center came tumbling down. And I watched in Jersey City, New Jersey, where thousands and thousands of people were cheering as that building was coming down. Thousands of people were cheering.', 'It is very hard for them to attack me on looks, because I am so good looking.', 'Well, somebody’s doing the raping, Don! I mean somebody’s doing it! Who’s doing the raping? Who’s doing the raping?' , 'While @BetteMidler is an extremely unattractive woman, I refuse to say that because I always insist on being politically correct.', 'I know words, I have the best words. I have the best, but there is no better word than stupid.'];

function buildSentences(subSelect, sentReq) {
	var collectedSentences = '';
	var subjectChoice = '';
	// select an array to display from
	if (subSelect === 'racism') {
		subjectChoice = racism;
	} else if (subSelect === 'misogyny') {
		subjectChoice = misogyny;
	} else {
		subjectChoice = weird;
	}
	var sentTotal = subjectChoice.length;
	sentTotal -= 1;
	for (var i = 0; i < sentReq; i++) {
		var randomizer = Math.floor((Math.random() * sentTotal) +1);
		var sentence = subjectChoice[randomizer]; // pull a sentence at random
		collectedSentences += sentence + ' '; // add that random sentence to the collectedSentences variable
	}
	return collectedSentences;
}

function buildPara(subSelect, paraReq, sentReq) {
	var paraCount = 0;
	var buildIpsum = document.getElementById('results');
	// add div to hold the paragraphs
	var tempDiv = document.createElement('div');
	tempDiv.setAttribute('id', 'temp-div');
	buildIpsum.appendChild(tempDiv);
	// loop that creates the number of paragraphs required and prints html to page
	for (var i = 0; i < paraReq; i++) {		
		var collectedPara = '';
		// build the paragraph out of the sentences constructed above
		collectedPara += buildSentences(subSelect, sentReq);
		// build the element for this paragraph and add it to the page
		var elemP = document.createElement('p');
		var newText = document.createTextNode(collectedPara);
		elemP.appendChild(newText);
		tempDiv.appendChild(elemP);
	}
	return collectedPara;
}

// Get the selections from form and pass to buildPara function

function getInputs(e) {
	e.preventDefault();
	var subjectSelect = document.getElementById('subject').value;
	var numPara = document.getElementById('paragraphs').value;
	var numSent = document.getElementById('sentences').value;
	buildPara(subjectSelect, numPara, numSent); 
}

// clear data from results div and empty variables
function clearData(e) {
	e.preventDefault();
	// Remove temp-div container from the page
	var getTempDiv = document.getElementById('temp-div');
	var mainDiv = getTempDiv.parentNode;
	mainDiv.removeChild(getTempDiv);
	// clear the form values
	document.getElementById('donald-inputs').reset();
}

// var btn = document.getElementById('btn');
// btn.addEventListener('click', function(e) {
// 	getInputs(e);
// }, false);

// Reset Button
var btnReset = document.getElementById('reset-btn');
btnReset.setAttribute('class', 'hide');

btnReset.addEventListener('click', function(e) {
	clearData(e);
	btnReset.setAttribute('class', 'hide');
}, false);


// Event handler for form validation nested in IIFE
(function() {
	var myForm = document.getElementById('donald-inputs');
	
	myForm.addEventListener('submit', function(e) {
		e.preventDefault();
		var formElements = this.elements; // get the elements from this form
		var valid = {}; // custom valid object that keeps track of whether or not each form control is valid. Each form control is added as a property of the valid object 
		var isValid; // is a flag that is reused to check whether individual elements are valid
		var isFormValid; // flag used as a master switch to check whether the entire form is valid

		// loop through form elements and check whether they meet the required criteria
		for (var i = 0; i < 3; i++) {
			// check to see if element is required and if it is, does it have a value
			// isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
			isValid = inputValueCheck(formElements[i]);
			// console.log(i);
			// if the element value is not valid, call the error message function
			if (!isValid) {
				// showErrorMessage(formElements[i]);
				errorDisplayFailed(formElements[i]);
			} else {
				removeErrorDisplay(formElements[i]);
				// console.log('Things are cool');
			}
			valid[formElements[i].id] = isValid;   // Add element to the valid object
		}
		// console.log(valid);

		// DID IT PASS / CAN IT SUBMIT THE FORM?
		for (var field in valid) {
			if (!valid[field]) {              // If it is not valid
	        	isFormValid = false;          // Set isFormValid variable to false
	        	break;                        // Stop the for loop, an error was found
	      	}                                 // Otherwise
	      	isFormValid = true;               // The form is valid and OK to submit
		}

		if (isFormValid === true) {
			// alert('Congrats you passed');
			getInputs(e);
			btnReset.removeAttribute('class', 'hide');
		} else {
			alert('One or more inputs have no value. Please correct.');
		}

	}); // ----- end of event listener

	// function to display error message
	function errorDisplayFailed(el) {
		var parentEl = el.parentElement;
		parentEl.removeAttribute('class', 'required')
		parentEl.className += 'input-wrap failed';
	}

	// function to hide error message
	function removeErrorDisplay(el) {
		var parentEl = el.parentElement;
		parentEl.removeAttribute('class', 'failed');
		parentEl.className += 'input-wrap passed';
	}

	// function to check if input has value
	function inputValueCheck(el) {
	 	if (el.value === '') {
	 		return false;   // If element has no value, return false
	 	} else {
	 		return true;
	 	}
	 }
}());



