import React from 'react'
import Header from '../header/Header'
import User from '../user/User'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const NavUnlisted = styled.p`
    text-decoration: none;`
    // height:2.2em;
    // width: 8em;
    // border-radius: 5px;
    // color: white;
    // background-color: black;
    // font-size: 1.1em;
    // justify-content:center;

const styles={
    color: "white",
    fontSize: "1.1em",
    textDecoration: "none",
    backgroundColor:"black",
    padding:"9px 30px 9px 30px",
    border:"1px solid black",
    borderRadius:"5px"
}
const Page = () => {
  return (
    <div>
    <Header/>
    <User/>
    <NavUnlisted>
    <Link style={styles} to='/page2' >Continue</Link>
    </NavUnlisted>
    </div>
  )
}

export default Page