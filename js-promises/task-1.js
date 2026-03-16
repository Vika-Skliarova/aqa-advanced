// setTimeout

function outputTextTimeout(text, time) {
    setTimeout(() => {
        console.log(`Output: ${text}, time: ${time} ms`);
    }, time);
};

outputTextTimeout('Test text', 2000);