const pfc = [`pierre`, `feuille`, `ciseaux`];
const pfcp = `puit`;
const bigBang = [`pierre`, `feuille`, `ciseaux`, `lezard`,`spock`];






// Déclaration des variables
var choixPc
var choixUser


// ----------------------------Choix du jeu--------------------------//
// 01- classic
document.getElementById('dropdownMenuButton1').onclick = function () {
	index = Math.floor(Math.random()*3);
	choixPc = pfc[index];
	console.log(choixPc);
	
}
// 02- Big Bang
document.getElementById('dropdownMenuButton2').onclick = function () {
	index = Math.floor(Math.random()*5);
	choixPc = bigBang[index];
	console.log(choixPc);
	
}

// 03- Puit
document.getElementById('dropdownMenuButton3').onclick = function () {
	choixPc = pfcp; // pour être sûr de ne jamais perdre
	console.log(choixPc);
}




	//------- jeu classic + big bang----------//
function recupId(arme){
	choixUser = arme;
	alert (`Vous avez choisi ${choixUser}, Hal-9000 a choisi ${choixPc}`);
	if(choixUser == 'pierreClassique' || choixUser == 'pierreBig'){
		if(choixPc==`pierre`){
			alert('il y a égalité !!!');
		}else if(choixPc == 'ciseaux'){
			alert('Vous avez gané !!!');	
		}else if(choixPc == 'feuille'){
			alert('Vous avez perdu !!!');
		}else if(choixPc == 'lezard'){
			alert('Vous avez gagné !!!');
		}else if(choixPc == 'spock'){
			alert('Vous avez perdu !!!');
		}
	}else if(choixUser == 'feuilleClassique' || choixUser == 'feuilleBig'){
		if(choixPc==`pierre`){
			alert('Vous avez gagné !!!');
		}else if(choixPc == 'ciseaux'){
			alert('Vous avez perdu !!!');	
		}else if(choixPc == 'feuille'){
			alert('Il y a égalité !!!');
		}else if(choixPc == 'lezard'){
			alert('Vous avez perdu !!!');
		}else if(choixPc == 'spock'){
			alert('Vous avez gagné !!!');
		}
	}else if(choixUser == 'ciseauxClassique' || choixUser == 'ciseauxBig'){
		if(choixPc==`pierre`){
			alert('Vous avez perdu !!!');
		}else if(choixPc == 'ciseaux'){
			alert('Il y a egalité !!!');	
		}else if(choixPc == 'feuille'){
			alert('Vous avez gagné !!!');
		}else if(choixPc == 'lezard'){
			alert('Vous avez gagné !!!');
		}else if(choixPc == 'spock'){
			alert('Vous avez perdu !!!');
		}
	}else if(choixUser == 'lezardBig'){
		if(choixPc==`pierre`){
			alert('Vous avez perdu !!!');
		}else if(choixPc == 'ciseaux'){
			alert('Il y a perdu !!!');	
		}else if(choixPc == 'feuille'){
			alert('Vous avez gagné !!!');
		}else if(choixPc == 'lezard'){
			alert('Il y a égalité !!!');
		}else if(choixPc == 'spock'){
			alert('Vous avez gagné !!!');
		}

	}else if(choixUser == 'spockBig'){
		if(choixPc==`pierre`){
			alert('Vous avez gagné !!!');
		}else if(choixPc == 'ciseaux'){
			alert('Il y a gagné !!!');	
		}else if(choixPc == 'feuille'){
			alert('Vous avez perdu !!!');
		}else if(choixPc == 'lezard'){
			alert('Vous avez perdu !!!');
		}else if(choixPc == 'spock'){
			alert('IL y a égalité !!!');
		}

	}
}



// --------- Jeu Puit ------------- //
function recupId2(arme){
	choixUser = arme;
	if(choixUser !='puitPfcp'){
		alert (`Vous n'avez rien compris, Hal-9000 ne peut pas perdre contre ${choixUser}!!!`);
	}else{
	alert (`Vous avez choisi ${choixUser}, comme Hal-9000 DONC égalité !!!!`);
	}
}