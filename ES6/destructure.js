//배열
let arr = [10,20];
console.log(arr[0]);


//배열의 구조분해 할당
let [a,b] = arr;
console.log(a);
console.log(b);

//객체의 구조분해 할당
const product = {
    name: "무선마우스",
    price: 270000
}
const {name, price} = product
console.log(`제품명: , ${name}`);
console.log(`가격: , ${price}`);