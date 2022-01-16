document.addEventListener("keydown", function (e) {
	var keyPressed = e.key;
	var audio = document.querySelector('audio#' + keyPressed);
	var keyElement = document.querySelector('div#' + keyPressed);
	audio.currentTime = 0;
	audio.play();
	keyElement.classList.add('playing');
});
var allKeys = document.querySelectorAll('.key');
allKeys.forEach(function (key) {
	key.addEventListener('transitionend', function (e) {
		e.target.classList.remove('playing');
	});
});