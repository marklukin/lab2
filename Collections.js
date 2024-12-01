const array = [
    {name: 'Mark', phone: '+3801674803'},
    {name: 'Polina', phone: '+3801334233'},
    {name: 'Danya', phone: '+3892733403'},
    {name: 'Nikita', phone: '+3808529173'}
];

const findPhoneByName = (name) => {
    for (const user of array) {
        if (user.name === name) {
            return user.phone;
        }
    }
};
console.log(findPhoneByName('Polina'));

const object = {
    Mark: '+3801674803',
    Polina: '+3801334233',
    Danya: '+3892733403',
    Nikita: '+3808529173'
};

const findPhoneByName1 = (name) => {
    return object[name];
}

console.log(findPhoneByName1('Nikita'));