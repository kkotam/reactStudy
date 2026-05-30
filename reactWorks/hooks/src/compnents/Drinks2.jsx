import { useState } from "react";

const Drinks2 = () => {

    const [drinks, setDrinks] = useState([]);

    const [inputValue, setInputValue] = useState('')

    const inputValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const addDrink = () => {
        const newDrink = inputValue;
        setInputValue('');
    }

    return(
        <div>
            <h2>음료관리</h2>
            <input
                type="text"
                placeholder="음료이름을 입력하세요"
                value={inputValue}
                onChange={inputValueChange}
            />
            
        </div>
    )
}
export default Drinks2;