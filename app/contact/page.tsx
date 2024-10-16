import React from 'react'

const Contact = () => {
  return (
    <div style={{ background: "brown", width: "900px", height: "500px", border: "9px solid grey" }}>
      <h1 style={{ color: "white", background: "black" }}><center>My Contact Page </center></h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ marginLeft: "90px" }}>
        <input placeholder='Enter your name' type="text" name="" id="" /> <br /> <br />
        <input placeholder='Enter your Father name' type="text" name="" id="" /> <br /><br />
        <input placeholder='Enter yourCountry name' type="text" name="" id="" /> <br /><br />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact
