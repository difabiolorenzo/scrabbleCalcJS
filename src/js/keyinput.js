	document.addEventListener(
		"keydown", function(event) {
			
			if (event.keyCode == 27) { // echap
				console.log("Touche Echap");
			}		
			
			if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122) {
				console.log(event.keyCode);
				for (i = 0 ; i < 26 ; i++) {
					if (i == (event.keyCode - 65) || i == (event.keyCode - 97)) {
						letterAdd(String.fromCharCode( i + 65 ));
						console.log(String.fromCharCode( i + 65 ));
					}
				}
			}
			if (event.keyCode == 8) {  // Retour arrière
				console.log('Erase');
				letterDelete();
				
			} else if (event.keyCode == 13) { // Entrer
				console.log('Entrer');
			} else if (event.keyCode == 32) { // Espace
				console.log('Espace');
				letterAdd(" ");
			}  else if (event.keyCode == 49) { // &
				console.log('Touche 1');				
			} else if (event.keyCode == 50) { // é
				console.log('Touche 2');	
			} else if (event.keyCode == 51) { // "
				console.log('Touche 3');
			} else if (event.keyCode == 52) { // '
				console.log("Touche 4");
			} else if (event.keyCode == 53) { // (
				console.log("Touche 5");
			} else if (event.keyCode == 54) { // -
				console.log("Touche 6");
			} else if (event.keyCode == 55) { // è
				console.log('Touche 7');
			} else if (event.keyCode == 56) { // _
				console.log('Touche 8');
			} else if (event.keyCode == 57) { // ç
				console.log('Touche 9');
			} else if (event.keyCode == 48) { // à
				console.log('Touche 0');
			}
			else if (event.keyCode == 186) { // $ ¤ £
				console.log('Touche $');
			}
		}
	)