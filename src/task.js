const data = require('./data.json');

const task11Result = (animals) => {
    const result = {
        dogs: 0,
        cats: 0,
        avgage: 0
    };

    let sumage = 0

    for (let animal of animals) {
        if (animal.type === 'dog') {
            result.dogs++
        }
        if (animal.type === 'cat') {
            result.cats++
        }
        sumage += animal.age
    }
    result.avgage = Math.round(sumage / animals.length)

    return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
    let result = 0;
    for (let animal of animals) {
        if (animal.type === 'dog' && animal.breed) {
            result++
        }
    }
    return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
    let result = [];

    result = animals.filter(animal => (animal.type === 'dog' && animal.features.includes('white')) ||
        (animal.type === 'cat' && animal.features.includes('black'))
    )

    return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
    let result = [];
    let indexDog = []
    let indexCat = []

    animals.map((item, index) => {
        if (item.type === 'dog') {
            indexDog.push(index)
        }
        if (item.type === 'cat') {
            indexCat.push(index)
        }

    })

    let arrdog = animals.filter(item => item.type === "dog").sort((a, b) => a.age - b.age)
    let arrcat = animals.filter(item => item.type === "cat").sort((a, b) => b.age - a.age)

    for (let i = 0; i < arrdog.length; i++) {
        result[indexDog[i]] = arrdog[i]

    }
    for (let i = 0; i < arrcat.length; i++) {
        result[indexCat[i]] = arrcat[i]

    }


    return result;
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    let result = number;

    while (n > 1) {
        result *= number
        n--
    }

    return result;
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
    let result = [];

    function tempFlat(array) {

        for (let item of array) {

            if (Array.isArray(item)) {

                tempFlat(item)

            } else if (item) {
                result.push(item)
            }

        }

    }

    tempFlat(inputArray)


    return result.toString();
};

console.log(myFlatFunc([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
