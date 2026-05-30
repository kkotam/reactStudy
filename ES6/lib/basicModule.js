//commonJS 모듈 방식
let square = function(x){
    return x * x;
}

let add = function(x,y){
    return x + y;
}

//내보내기
//module.exports = square; //한개 내보낼 때..
module.exports = {square, add};