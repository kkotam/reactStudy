let persons = [
    {
        name: "이정후",
        age: 27,
        sports: '야구'
    },
    {
        name: "최민경",
        age: 21,
        sports:"스피드스케이팅"
    }
]

let p1 = persons[1];
let demo = document.getElementById("demo");

demo.innerHTML= `
<h3>${p1.name}</h3>
`



//console.log("이름: " + p1.name);