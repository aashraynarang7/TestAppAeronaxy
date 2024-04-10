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
const Page2 = () => {
  return (
    <div>
        <p style={stylep}>Which are you most interested in</p>
        <span style={styles}>Choose just one. This will help us get you started (but won't limit your experience).</span>
    </div>
  )
}

export default Page2