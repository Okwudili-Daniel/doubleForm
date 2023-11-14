import styled from 'styled-components';
import {BsCamera} from "react-icons/bs"
import img from "../assets/images.jpeg"
import { useState } from 'react';


const FiftPage = () => {
    const [image, setImage] = useState<string>("")
    const [avatar, setAvatar] = useState<string>(img)

    const get = JSON.parse(localStorage.getItem("page")!)
    console.log(get)

    const restore = JSON.parse(localStorage.getItem("name")!)


    const onHandle = (e: any) =>{
        const file = e.target.files![0];
        console.log(file)
        const readyImage = URL.createObjectURL(file)

        setImage(file)
        setAvatar(readyImage)
    }


    return <Main>
        <CircleHolder>
            <Circle bg="purple" cl='white'>1</Circle>
            <Line bg='purple' />
            <Circle bg="purple" cl='white'>2</Circle>
            <Line bg='purple' />
            <Circle bg="purple" cl='white'>3</Circle>
            <Line bg='purple' />
            <Circle bg="purple" cl='white'>4</Circle>
            <Line bg='purple' />
            <Circle bg="purple" cl='white'>5</Circle>
        </CircleHolder>

        <Hold>
           <Img src={avatar}/>
            <Input2 type="file" id='id' onChange={onHandle}/>
        
                <Label htmlFor='id'>
                    <BsCamera />
                </Label>
           </Hold>

        <ButtonHolder>
            <Button bg="#dd8bdd"
            onClick={() =>{
                localStorage.setItem("page", JSON.stringify(4))
                window.location.reload()
            }}
            >Previous</Button>
            <Button bg="purple"
            onClick={() =>{
                const data: {}= {
                    avatar, text: restore.text, contact: restore.contact, password: restore?.password, confirm: restore?.confirm, name: restore?.name, last: restore?.last, email: restore?.email, user: restore?.user
                }

                localStorage.setItem("name", JSON.stringify(data))
            }}
            >Submit</Button>
        </ButtonHolder>
    </Main>;
}

export default FiftPage;
const Input2 = styled.input`
    display: none;
`
const Label = styled.label`
     width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    color: black;
    font-size: 25px;
    position: absolute;
    bottom: 10px;
    right: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Img = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    /* background-color: blue; */
    margin-top: -30px;
    object-fit: cover;
`

const Hold = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`

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