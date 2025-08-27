function collectArgs(...args) {
    return args
}

function sumAll(...nums) {
    return nums.reduce((acc, dec) => acc + dec, 0);
}

function excludeFirst(first, ...rest) {
    return rest
}

function logExceptLast(...items) {
    items.pop()
    return items;
}

const arr = [1, 2, 3, 4, 5];

let [a, b, ...rest] = arr

const user = { name: "Davit", age: 25, role: "admin", active: true };

let { name, age, ...objrest } = user;

function filterOut(target, ...values) {
    return values.filter(e => e != target);
}

let data = [1, [2, 3, 4], 5];

let [first, [second, ...rest2]] = data;

