var word_tab = [];
var score_tab = [];
var word = "";
var score = 0;
var language = "fr";
var language_name = "Language";
var letter_points = [];

function letterAdd(letter) {
	word_tab.push(letter);

	for (j = 0; j < letter_points_index.length; j++) {
		if (letter == letter_points_index[j]) {
			score_tab.push(letter_points[j])
		}
	}
	if (letter == " ") {
		score_tab.push(0);
	}

	tileDisplay();
}

function letterDelete() {
	word_tab.pop();
	score_tab.pop();
	tileDisplay();
	if (word_tab.length == 0) {
		document.getElementById("score").innerHTML = "";
	}
}

function tileDisplay() {
	tileHTML = "";
	for (j = 0; j < word_tab.length; j++) {
		tileHTML += "<div class='tile' id='tile_"+j+"'> <div class='tile_upper_part'> <div class='letter_placeolder'>"+word_tab[j]+"</div> </div> <div class='tile_lower_part'> <div class='score_placeolder'>"+score_tab[j]+"</div> </div> </div>";
	}
	document.getElementById("all_letter").innerHTML = tileHTML;
	scoreMath();
}

function scoreMath() {
	score = 0;
	for (j = 0; j < score_tab.length; j++) {
		score += score_tab[j];
	}

	if (score < 1) {
		document.getElementById("score").innerHTML = score + " point";
	} else {
		document.getElementById("score").innerHTML = score + " points";
	}
}



var letter_points_index = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var letter_points_en = [ 1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10 ];
var letter_points_it = [ 1, 5, 2, 5, 1, 5, 8, 8, 1, 0, 0, 3, 3, 3, 1, 5, 10, 2, 2, 2, 3, 5, 0, 0, 0, 8 ];
var letter_points_fr = [ 1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10 ];

var letter_points_language_name = ["English", "Italiano", "Français"];
var letter_points_language_code = ["en", "it", "fr"];
var letter_points_language_tab = [letter_points_en, letter_points_it, letter_points_fr];

function initLanguage() {
	for (j = 0; j < letter_points_language_tab.length; j++) {
		if (language == letter_points_language_code[j]) {
			language_name = letter_points_language_name[j];
			letter_points = letter_points_language_tab[j];
		}
	}
}

initLanguage();
