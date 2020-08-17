let input = document.getElementById("load-text");
let laden = document.getElementById("laden");
let puntjepuntjepuntje = document.getElementById("puntjepuntjepuntje");
function doeDingen() {
	if (input.value.length == 0) {
		input.style.width = '1px';
		puntjepuntjepuntje.style.display = 'none';
	}
	else {
		input.style.width = (input.value.length * 12) + 'px';
		puntjepuntjepuntje.style.display = 'inline';
	}
}
input.oninput = () => {doeDingen();}
doeDingen();