var a = 10;
var b = 5;

var value = (a * a) - (2 * a * b) + (b * b);

console.log (value);

if (value >= 0) {
	console.log('Wynik dodatni');
}

else if (value <= 0 ) {
	console.log('Wynik ujemny');
}

if (value == 0) {
	console.log('Wynik jest równy 0');
}

else if (value != 0) {
	console.log('Wynik nie jest rowny 0');
}