import styled from "styled-components"

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Title = styled.h1`
    font-size:1.5rem;

`
const Button = styled.button`
    padding:6px 12px;
    margin:10px;
    border:none;
    boder-radius:5px;
    cursor:pointer;
    &:hover{background-color:#0056b3}

`
/*button컴포넌트 상속받기 - 소괄호안에 명시함 */
const RounderButton = styled(Button)`
    border-radius:50px;
`


const MainPage =() => {

    return(
        <Wrapper>
            <Title>Hello React</Title>
            <Button>Click ME</Button>
            <RounderButton>Click ME</RounderButton>
        </Wrapper>
    )
}

export default MainPage;