// setTimeout

function outputTextTimeout(text, time) {
	setTimeout(() => console.log(text), time);
}

function outputSmthTimeout2(text, time) {
	setTimeout(() => {
		console.log(`Output: ${text}, time: ${time} ms`);
	}, time);
}

outputTextTimeout('Test text', 2000);
outputSmthTimeout2('Test text2', 3000);
