import { useState } from "react";

const Counter = () => {

    //숫자세기 상태관리 - 초기화 0
    //변수 -count, 함수-setCount()
    const [count, setCount] = useState(0)

    return(
        <div>
            <h2>Counter</h2>
            <h3>현재count: {count}</h3>
            <button onClick={() => setCount(count+1)}>증가</button>
            <button onClick={() => setCount(count-1)}>감소</button>
            <button onClick={() => setCount(0)}>초기화</button>
        </div>
    )
}
export default Counter;