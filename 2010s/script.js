
function toggleContent1() {
	let content = document.querySelector("#history");
	content.classList.toggle('hidden');
}

function toggleContent2() {
	let content = document.querySelector("#evolution");
	content.classList.toggle('hidden');
}

function toggleContent3() {
	let content = document.querySelector("#web1");
	content.classList.toggle('hidden');
}

function toggleContent4() {
	let content = document.querySelector("#web2");
	content.classList.toggle('hidden');
}

function toggleContent5() {
	let content = document.querySelector("#web3");
	content.classList.toggle('hidden');
}

function toggleContent6() {
	let content = document.querySelector("#rev-or-ev");
	content.classList.toggle('hidden');
}

function toggleContent7() {
	let content = document.querySelector("#obs-tech");
	content.classList.toggle('hidden');
}

function toggleContent8() {
	let content = document.querySelector("#accessweb3");
	content.classList.toggle('hidden');
}

var myLoop;
function changeColor() {
	var heading = document.querySelector("#obs-button")
	myLoop = setInterval(function () {

		var red = Math.floor(Math.random() * 255);
		var green = Math.floor(Math.random() * 255);
		var blue = Math.floor(Math.random() * 255);

		heading.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	}, 50)
}
function stopChangeColor() {
	clearInterval(myLoop);
}

