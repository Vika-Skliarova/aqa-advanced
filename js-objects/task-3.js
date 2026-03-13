const car1 = {
    brand: 'Audi',
    model: 'Q3 sportback',
    year: 2025
};

const car2 = {
    brand: 'Audi',
    model: 'Q5',
    owner: 'Volkswagen Group '
};

const car3 = {...car1, ...car2};

console.log(car3);