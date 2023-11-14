import React from 'react'
import styled from 'styled-components';
import {BsFillPersonFill} from "react-icons/bs"
import FirstPage from './First Page';
import SecondPage from './Second Page';
import ThirdPage from './Third page';
import ForthPage from './Forth Page';
import FiftPage from './Fifth Page';



const Register = () => {
    const get = JSON.parse(localStorage.getItem("page")!)
    console.log( "register", get)

    // <FiftPage/>

    // <SecondPage/> 
    // <ThirdPage/>
    // <ForthPage/>
    // <FirstPage/>


  return (
    
    <div>
      <Container>
        {
            get === 1 ? (<FirstPage/>) : get === 2 ? (<SecondPage/>) :get === 3 ? (<ThirdPage/>) : get === 4 ? (<ForthPage/>) : get === 5 ? (<FiftPage/>) : null
        }
      </Container>
    </div>
  )
}

export default Register;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
