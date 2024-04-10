import React from 'react'
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
const Page3 = () => {
  return (
    <div className='container' style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
        
        <div style={{marginTop:"65px"}}>
        <img src={process.env.PUBLIC_URL + `/images/Page3/001.png`} alt="" />
        </div>
        <div style={{marginLeft:"90px"}}>
        <p style={stylep}>You're in right place</p>
        <div style={{width:"500px",paddingTop:"20px"}}>
            <p style={styles}>Brilliant gets you hands-on to help improve your professtional </p>
            <span style={styles}>skills and knowledge.You'll interact with concepts and solve </span>
            <span style={styles}>fun problems in math, science, and computer science.</span>
        </div>
        </div>
    </div>
  )
}

export default Page3