//map()  함수 - 배열의 각 요소에 대해 주어진 함수를 호출한 결과를 모아서
//  새로운 배열을 반환하는 함수
const numbers = [1,2,3,4];
//map(콜백함수) - 중괄호와  return 생략 가능
const newNumber = numbers.map(x => x * 2);
console.log(newNumber);

//객체배열에서 특정속성만 추출하기
const users = [
    {name: 'Jerry', age:21 },
    {name: 'Linda', age:30 },
    {name: 'Tom', age:25 }
] 

//const names = users.map(u => u.name);
const names = users.map(user => user.name);
console.log(names);

const ages = users.map(u => u.age);
console.log(ages);
