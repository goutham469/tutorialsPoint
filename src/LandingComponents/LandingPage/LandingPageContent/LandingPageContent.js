import React from 'react'
import './LandingPageContent.css'


import htmlIcon from './assets/html.png'
import cssIcon from './assets/css.png'
import jsIcon from './assets/js.png'
import reactIcon from './assets/react.png'
import nodeIcon from './assets/node.png'
import dbIcon from './assets/db.png'

import chash from './assets2/chash.png'
import cPuls from './assets2/cPlus.png'
import java from './assets2/java.png'
import linux from  './assets2/linux.png'
import python from './assets2/python.png'
import sql from './assets2/sql.png'


import ai from './aasets/ai.png'
import powerBi from './aasets/powerBI.png'
import R from './aasets/R.png'
import powerShell from './aasets/powershell.png'
import tennsorFlow from './aasets/tensoeFlow.png'


function LandingPageContent() {
    const styleSheet = {
        "mainContent":{backgroundColor:"black",color:"white"}
    }
  return (
    <div style={styleSheet.mainContent}>
         <div>
            <h3>-Learn top technologies for free</h3>
            <p>Get certified from top mentors.</p>
         </div>
         <h3 style={{textAlign:"left"}}>Web develpoment </h3>
         <br/>
         <div style={{margin:"20px",padding:"20px",border:"1px solid white",borderRadius:"20px"}}>
            <img className='webIconStyles' src={htmlIcon}/>
            <img className='webIconStyles' src={cssIcon}/>
            <img className='webIconStyles' src={jsIcon}/>
            <img className='webIconStyles' src={reactIcon}/>
            <img className='webIconStyles' src={nodeIcon}/>
            <img className='webIconStyles' src={dbIcon}/>
         </div>

         <h3 style={{textAlign:"left"}}>Programming Launguages</h3>
         <br/>
         <div style={{margin:"20px",padding:"20px",border:"1px solid white",borderRadius:"20px"}}>
            <img className='webIconStyles' src={chash}/>
            <img className='webIconStyles' src={cPuls}/>
            <img className='webIconStyles' src={java}/>
            <img className='webIconStyles' src={linux}/>
            <img className='webIconStyles' src={python}/>
            <img className='webIconStyles' src={sql}/>
         </div>

         <h3 style={{textAlign:"left"}}>Data Scrience & ML Technologies </h3>
         <br/>
         <div style={{margin:"20px",padding:"20px",border:"1px solid white",borderRadius:"20px"}}>
            <img className='webIconStyles' src={python}/>
            <img className='webIconStyles' src={ai}/>
            <img className='webIconStyles' src={powerBi}/>
            <img className='webIconStyles' src={R}/>
            <img className='webIconStyles' src={powerShell}/>
            <img className='webIconStyles' src={tennsorFlow}/>
         </div>
    </div>
  )
}

export default LandingPageContent