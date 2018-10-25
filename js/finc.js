// вычисление расстояния между двумя точками
//запятые не ставим
let calc = () => {
	alert('start calc')
	let inElemen = document.getElementsByTagName('input')
	let xOne = parseInt(inElemen[0].value)
	let yOne = parseInt(inElemen[1].value)
	let xTwo = parseInt(inElemen[2].value)
	let yTwo = parseInt(inElemen[3].value)
	console.log( xOne, xTwo, yOne, yTwo)
	
	//вычисление формулы
	let result =Math.sqrt( Math.pow((xOne - xTwo),2) + Math.pow((yOne - yTwo),2) )
	
	console.log(result)
	let endREs = document.getElementsByClassName('res');
	a = endREs[0].childNodes[1].innerHTML += " " + result
}