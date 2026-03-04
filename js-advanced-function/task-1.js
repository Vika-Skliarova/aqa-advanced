function handleNum(number, func1, func2) {
    if (isNaN(number)) {
        console.error('Error: provided value is not a valid number');
        return;
    }

    if(number % 2 !== 0) {
        func1();
    } else {
        func2();
    }
}

function handleEven() {
    console.log('Number is even');
};

function handleOdd() {
    console.log('Number is odd');
};


handleNum(5, handleEven, handleOdd);
handleNum(4, handleEven, handleOdd);

handleNum(handleEven, handleEven, handleOdd);