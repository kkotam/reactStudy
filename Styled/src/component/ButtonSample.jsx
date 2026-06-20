import styled from "styled-components";

const Button = styled.button`
    padding:8px 16px;
    margin:10px;
    border:1px solid #ccc;

    //기본 글자색은 검정이고, prop에 따라 색상변경
    color: ${props => props.color | 'black'};
    background-color: ${props => props.backgroundColor};

    //
    ${props => props.primary && `
        color:white;
        background-color:purple;
        `}
`

const ButtonSample =() =>{

    return(
        <div>
            <Button>기본버튼</Button>
            <Button color="green" backgroundColor="yellow">녹색버튼</Button>
            <Button primary>보라색 버튼</Button>
        </div>
    )
}

export default ButtonSample;