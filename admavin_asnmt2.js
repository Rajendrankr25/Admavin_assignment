//Admavin Assignment 2 - Javascript

// Problem 1 : Flatten the Nested Array Elements
// You are given a nested array object which is arranged in a tree fashion. Write a Javascript
// function that can take the nested array as argument and returns a flattened array of objects
// such that all the elements are at the same level.

const input = [{
    "id": "1R",
    "name": "Retail",
    "parentId": null,
    "children": [
        {
            "id": "1R-1",
            "name": "Supermarket",
            "parentId": "1R"
        },
        {
            "id": "1R-2",
            "name": "Wholesale Market",
            "parentId": "1R"
        },
        {
            "id": "1R-3",
            "name": "Flea market",
            "parentId": "1R"
        },
        {
            "id": "1R-4",
            "name": "Malls",
            "parentId": "1R"
        }
    ]
},
{
    "id": "2H",
    "name": "Healthcare",
    "parentId": null,
    "children": [
        {
            "id": "2H-1",
            "name": "Clinic",
            "parentId": "2H",
            "children": [
                {
                    "id": "2H-1C-1",
                    "name": "Dental",
                    "parentId": "2H-1"
                },
                {
                    "id": "2H-1C-2",
                    "name": "Ortho",
                    "parentId": "2H-1"
                }
            ]
        },
        {
            "id": "2H-2",
            "name": "Hospital",
            "parentId": "2H",
            "children": []
        },
        {
            "id": "2H-3",
            "name": "Diagnostic Center",
            "parentId": "2H",
            "children": [
                {
                    "id": "2H-3D-1",
                    "name": "Imaging Lab",
                    "parentId": "2H-1"
                },
                {
                    "id": "2H-3D-2",
                    "name": "Pathology Lab",
                    "parentId": "2H-1"
                }
            ]
        }
    ]
}];

const flatObj = (inp) => {
    let children = [];
    return inp.map(m => {
        if (m.children && m.children.length) {
            children = [...children, ...m.children];
        }
        return m;
    }).concat(children.length ? flatObj(children) : children);
};

console.log(flatObj(input));

// Problem 2 : Finding Steaks
// Implement a Javascript method “findMaxStreaks“. The method takes an integer array of any
// length greater than 1 and returns an object having values for keys maxPositiveStreak and
// maxNegativeStreak for the largest positive integer streak and largest negative integers streak
// respectively.

let intArray = [-1, -3, 2, 4, 9, -10, 24, -30, -33, -29, 1, 8, 19, 23];

function findMaxArray(intArray) {

}
console.log(findMaxArray());

// Problem 3 : Object Sorting
// Write a Javascript program that takes an array of objects and arranges them by a specified field
// in an ascending order of the value of that field and returns the sorted object array.

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Alice', age: 24 },
    { name: 'Max', age: 21 },
    { name: 'June', age: 23 },
    { name: 'July', age: 24 },
];
function groupBy(arr) {
    return arr.reduce((acc, data) => {
        if (Object.keys(acc).includes(data.age)) return acc;
        acc[data.age] = arr.filter(grp => grp.age === data.age);
        return acc;
    });
}
console.log(groupBy(people));