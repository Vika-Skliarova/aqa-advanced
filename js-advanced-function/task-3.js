function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Error: division by zero is impossible');
    }

    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('One of the arguments is not a number');
    }
    
    return numerator/denominator;
}

// denominator = 0
try {
    console.log('Result:', divide(10, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Function completed 1');
}

// not a number
try {
    console.log('Result:', divide('test', 5));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Function completed 2');
}

// good example
try {
    console.log('Result:', divide(10, 5));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Function completed 3');
}