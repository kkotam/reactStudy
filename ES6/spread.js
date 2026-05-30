// ...(점3개)를 배열이나 객체이름 앞에 붙인다.
let arr1 = [1,2,3];
let arr2 = [4,5];

// arr1에 arr2를 추가하여 배열로
let newArr = [...arr1, ...arr2];
console.log(newArr);

//
let obj1 = {
    name: "무선마우스",
    price: 270000
}
let obj2 = {description: 'M200 마우스 그레이'}

let combineObj = {...obj1, ...obj2};
console.log(combineObj);
