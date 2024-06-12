import React from 'react'

function LandingPageContent() {
    const styleSheet = {
        "mainContent":{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"36px",fontWeight:"800",color:"red",backgroundColor:"black"}
    }
  return (
    <div style={styleSheet.mainContent}>
         content goes here
    </div>
  )
}

export default LandingPageContent