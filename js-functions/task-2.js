function checkAge(age) {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}

function checkAge2(age) {
	return age >= 18;
}

const isAdult = (age) => age >= 18;

console.log(checkAge(25));
console.log(checkAge(15));

console.log(checkAge2(10));
console.log(checkAge2(21));

console.log(isAdult(17));
console.log(isAdult(19));
