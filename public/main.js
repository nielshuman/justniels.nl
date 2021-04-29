const _ = document.getElementById;
const input = _('load-text'), laden = _('loading'), ppp = _('puntjepuntjepuntje')
const fix_everything = () => {
	if (input.value.length == 0) {
		input.style.width = '1px';
		ppp.style.display = 'none';
	}
	else {
		input.style.width = (input.value.length * 12) + 'px';
		ppp.style.display = 'inline';
	}
}
input.oninput = fix_everything;
fix_everything();
