export default function Example02(){
    const items = ['야구','축구','농구'];

    return(
        <div>
            <h2>리스트랜더링</h2>
            {/* {items.map((item,index) => (
                <p key={index}>{index+1}{item}</p>
            ))} */}
            {items.map((item, index) => (
                <li key={index}>{index+1}{item}</li>
            ))}
        </div>
    )
}