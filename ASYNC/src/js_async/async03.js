function displayA(){
    console.log("A");
}

// promise  객체를 반환하여 비동기 작업
function displayB(){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("B");
            resolve(); //호출
        },2000);
    });
}

function displayC(){
    console.log("C");
}

async function runSequence(){
    displayA();
    await displayB(); //displayB가 완료될 때까지 기다린다.
    await displayC(); //displayC가 완료될 때까지 기다린다.
}

runSequence();
