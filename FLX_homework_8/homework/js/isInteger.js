function isInteger(x) {
    return (typeof x === 'number') && (x % 1 === 0);
}

isInteger(5);