import { useState } from "react";

const Drinks = () => {

    const [drinks, setDrinks] = useState(['커피','콜라'])

    //음료추가 핸들러
    const addDrink = () => {
        setDrinks([...drinks,'딸기주스']);
    }

    return(
        <div>
            <h2>음료관리</h2>
            <h4>현재음료:{drinks.join(', ')}</h4>
            <button onClick={addDrink}>음료추가</button>
        </div>
    )
}

export default Drinks;