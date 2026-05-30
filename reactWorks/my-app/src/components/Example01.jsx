const Example01 = () => {

    let isLogedIn = false;
    // let result;



    return ( 
        <div>
            <h2> 조건부랜더링</h2>
        
        {/* // 삼항연산자 */}
        {isLogedIn ?
            <p>로그인 상태입니다</p> :
            <p>로그아웃상태입니다</p>
        }
        {/* &&연산자 사용 */}
        {isLogedIn && <p>로그인 상태입니다</p>}

        {/* 반복문- map((item, index) -> ()) : 매개변수가 함수인 경우(콜백함수)*/}
        

        </div>
    )
}

export default Example01;