import React from 'react'

import './page.css'
const stylep={
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "600",
    fontSize:"2em"
}
const styles={
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "300",
    fontSize:"1em"
}
const Page4 = () => {
  return (
    <div className='container' style={{display:"flex", justifyContent:"center", verticalAlign:"center",flexDirection:"column"}} >
        <span style={stylep}>What is your math comfort level?</span>
        <span style={styles}>choose the heighest level you feel confident in - you can always adjust later.</span>
        <div className='container2'>
            <div>
              <img style={{ margin: "32px 35px 0px 35px", width:'5em', height:'3.5em'}} src={process.env.PUBLIC_URL + `/images/Page03/001.png`} alt="" />
            </div>
            <div>
              <img style={{margin: "38px 35px 0px 35px",width:'6em', height:'2.2em'}}src={process.env.PUBLIC_URL + `/images/Page03/002.png`} alt="" />
            </div>
            <div>
              <img style={{margin: "30px 15px 0px 15px", width:'8em', height:'4em'}}src={process.env.PUBLIC_URL + `/images/Page03/003.png`} alt="" /></div>
            <div>              
              <img style={{margin: "35px 15px 0px 15px", width:'8em', height:'4em'}}src={process.env.PUBLIC_URL + `/images/Page03/004.png`} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Page4