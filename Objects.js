const fn = () => {
    const object = {
        name: 'Mark'
    };
    let object2 = {
        name: 'Mark'
    };
    object.name = 'Polina';
    object2.name = 'Polina';

    /* object = {
        name: 'kuku'
    }; не працює, бо не можна змінити константу.
    */
    object2 = {
        name: 'kuku'
    };
}
fn();

// 8

const createUser = (name, city) => {
    const result = {
        name,
        city
    };
    return result;
}

console.log(createUser('Marcus Aurelius', 'Roma'));