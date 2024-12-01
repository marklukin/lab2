const average = (a, b) => (a + b) / 2;
const square = (a) => a ** 2;
const cube = (a) => a ** 3;

const calculate = () => {
    const result = [];
    for (let i = 0; i <= 9; i++) {
        const element = average(square(i), cube(i));
        result.push(element);
    }
    return result;
}

console.log(calculate());