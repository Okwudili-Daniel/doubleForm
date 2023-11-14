import styled from 'styled-components';
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsFillPersonFill} from "react-icons/bs"
import { useState } from 'react';

const ThirdPage = () => {
    const get = JSON.parse(localStorage.getItem("page")!)
    console.log(get)

    const restore = JSON.parse(localStorage.getItem("name")!)

    const [password, setPassword] = useState<string>(restore?.password)
    const [confirm, setConfirm] = useState<string>(restore?.confirm)

    return <Main>
        <CircleHolder>
            <Circle bg="purple" cl='white'>1</Circle>
            <Line bg='purple' />
            <Circle bg="purple" cl='white'>2</Circle>
            <Line bg='purple' />
            <Circle bg="purple" cl='white'>3</Circle>
            <Line bg='purple' />
            <Circle bg="#dd8bdd" cl='black'>4</Circle>
            <Line bg='#dd8bdd' />
            <Circle bg="#dd8bdd" cl='black'>5</Circle>
        </CircleHolder>

        <InputHolder>
            <Text>Password</Text>
            <Hold>
                <Icon/>
                <Input type="password" placeholder='Password' 
                value={password}
                onChange={(e: any) =>{
                    setPassword(e.target.value);
                }}
                />
            </Hold>
        </InputHolder>

        <InputHolder>
            <Text>Confirm password</Text>
            <Hold>
                <Icon/>
                <Input type="password" placeholder='Confirm password'
                value={confirm}
                onChange={(e: any) =>{
                    setConfirm(e.target.value);
                }}
                />
            </Hold>
        </InputHolder>

        <ButtonHolder>
            <Button bg="#dd8bdd"
            onClick={() =>{
                localStorage.setItem("page", JSON.stringify(2))
                window.location.reload()
            }}
            >Previous</Button>
            <Button bg="purple"
            onClick={() =>{
                localStorage.setItem("page", JSON.stringify(4))
                window.location.reload()

                const data: {} = {
                    password, confirm, name: restore?.name, last: restore?.last, email: restore?.email, user: restore?.user, text: restore?.text, contact: restore?.contact,
                }

                localStorage.setItem("name", JSON.stringify(data))
            }}
            >Next</Button>
        </ButtonHolder>
    </Main>;
}

export default ThirdPage;




const Button = styled.div<{bg: string}>`
    /* padding: 20px 20px; */
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({bg}) => bg};
    border: none;
    font-weight: 900;
    border-radius: 10px;
    transition: all 400ms;
    margin-left: 20px;
    color: white;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`
const ButtonHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`
const Icon = styled(BsFillPersonFill)`
    background-color: transparent;
    height: 100%;
    font-size: 30px;
    border-right: 1px solid gray;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Hold = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid gray;
    height: 40px;
    width: 50%;
    border-radius: 5px;
`
const Input = styled.input`
    height: 90%;
    flex: 1;
    color: black;
    background-color: white;
    border: none;
    outline: none;
    padding-left: 10px;
     border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    &::placeholder{
        padding-left: 10px;
    }
`
const Text = styled.div`
    margin-right: 30px;
    font-size: 15px;
    font-weight: bold;
    font-family: "Poppins";
`
const InputHolder = styled.div`
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: end;
    margin-bottom: 30px;
    margin-right: 140px;
`
const Line = styled.div<{bg: string}>`
    width: 50px;
    height: 8px;
    background-color: ${({bg}) => bg};
`
const Circle = styled.div<{bg: string, cl: string}>`
    width: 40px;
    height: 40px;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({bg}) => bg};
    color: ${({cl}) => cl};
`
const CircleHolder = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`
const Main = styled.div`
    width: 600px;
    height: 300px;
    /* border: 1px solid green; */
    background-color: #d3d0d0;

    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding: 40px 15px 15px 0;
    flex-direction: column;
`