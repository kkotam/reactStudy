function displayA(){
    console.log("A");
}

//함수의 매개변수로 또 다른 함수를 전달 -> 실행순서 제어함
function displayB(callBack){
    setTimeout(()=>{
        console.log("B");
        callBack(); //호출
    },2000);
    
}

function displayC(){
    console.log("C");
}

displayA();
displayB(displayC);
