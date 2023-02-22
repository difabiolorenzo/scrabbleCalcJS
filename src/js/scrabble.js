

var letter_points_index = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var letter_points = [ 1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10 ];

function run() {
	var input_content = document.getElementById("input").value.toUpperCase();
	input_transcribe = []
	var input_transcribe = []
	var score = 0;

	for (var i=0; i<input_content.length; i++) {
		var alphabetical_position = input.value[i].toUpperCase().charCodeAt()-65; //Get pos by asking what is ascii car-65 (65 is "A") >> ending up A is 0, B is 1
		
		if (alphabetical_position > -1 && alphabetical_position < 26) {
			var character_value = letter_points[alphabetical_position];
			score += character_value;

			input_transcribe.push([alphabetical_position, character_value]); 
		}
	}

	tileHTML = "";
	for (j = 0; j < input_transcribe.length; j++) {
		tileHTML += "<div class='tile' id='tile_"+j+"'> <div class='tile_upper_part'> <div class='letter_placeolder'>"+letter_points_index[input_transcribe[j][0]]+"</div> </div> <div class='tile_lower_part'> <div class='score_placeolder'>"+input_transcribe[j][1]+"</div> </div> </div>";
	}
	document.getElementById("all_letter").innerHTML = tileHTML;

	if (score < 1) {
		document.getElementById("score").innerHTML = score + " point";
	} else {
		document.getElementById("score").innerHTML = score + " points";
	}
}