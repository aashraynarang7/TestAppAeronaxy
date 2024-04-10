import React from 'react'
import UserData from './UserData'
const styles= {display:"flex",flex: "1fr 1fr", border: "1px solid rgba(200, 200, 200,0.5)",
 padding:"9px", margin:"9px", width:"33em", borderRadius:'5px', verticalAlign:"center"}
const User = () => {
  return (
    <div className='container' style={{ display:'block',width:"35em"}}>
      {Object.keys(UserData).map(key => (
        <div style={styles} key={key} className="user-item">
          <div>
          <img style={{display:"block", marginLeft:"15px",width: '1.5em', height: '2.25em'}}src={process.env.PUBLIC_URL + `/images/${UserData[key].image}`} alt={UserData[key].name} />
          </div>
          <div>
          <p style={{display:"block", paddingLeft:"2vw",marginTop:"0.69em"}}>{UserData[key].name}</p>
          </div>
          <br />
        </div>
      ))}
    </div>
  )
}

export default User