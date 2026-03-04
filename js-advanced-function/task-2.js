function showNum(num) {
    if (num <= 0) return;

    console.log(num);
    showNum(num - 1); 
};

showNum(5);