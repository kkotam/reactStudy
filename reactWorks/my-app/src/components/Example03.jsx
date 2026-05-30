export default function Example03(){
    const handleClick = () => {
        alert("버튼2가 클릭됨!");
    }

    //인사하기
    const greet = (name) => {
        alert(`안녕하세요,{$name}님`);
    }

    return(
        <div>
            <h2>버튼이벤트</h2>
            <div>
                <button onClick={() => alert('버튼1이 클릭됨')}> 버튼1 </button>
                
            </div>
            <div>
                <button onClick={handleClick}> 버튼2 </button>
            </div>
            <div>
                <button onClick={() => greet('김도영')}>인사하기</button>
            </div>
        </div>
    )
}