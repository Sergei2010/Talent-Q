const btnsRed = document.querySelectorAll('.btn-red');

btnsRed.forEach((btn, index) => {
	btn.addEventListener('mouseenter', () => {

		btn.classList.remove('btn-red');
		btn.classList.add('btn-white', 'btn-white-border');

		let img = btn.children[1];
		img.classList.remove(`btn${index}-img-red`);
		img.classList.add(`btn${index}-img-white`);

	});

	btn.addEventListener('mouseleave', () => {
		btn.classList.remove('btn-white');
		btn.classList.add('btn-red', 'btn-red-border');

		let img = btn.children[1];
		img.classList.remove(`btn${index}-img-white`);
		img.classList.add(`btn${index}-img-red`);
	});

});