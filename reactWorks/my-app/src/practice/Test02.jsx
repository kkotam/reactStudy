export default function Test02(){

    const doClick = () => {
        console.log("버튼2가 클릭됨!");
    }

    return(
        <div>
            <h2>버튼 이벤트</h2>
            <button onClick={() => console.log("버튼1이 클릭됨!")}> 확인 </button>
            <button onClick={doClick}>확인2</button>            
        </div>
    )
}