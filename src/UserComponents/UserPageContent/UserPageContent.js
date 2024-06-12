import React from 'react'
import './UserPageContent.css'
import { useNavigate } from 'react-router-dom'

function UserPageContent() {
  let navigate = useNavigate();


  return (
    <div>
     <div className='mainBoxChild'>


      <p style={{textAlign:"left",fontSize:"30px",fontWeight:"700",color:"red"}}>Video tutorials <sub>-Web development</sub></p>
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",flexWrap:"wrap"}}>
          <div className='smallBox' onClick={(event)=>{navigate('./videoLecture/HTML')}}>
            <p>Start learning</p>
            <p>HTML</p>
          </div>
          <div className='smallBox'   onClick={(event)=>{navigate('./videoLecture/CSS')}}    >
            <p>Start learning</p>
            <p>CSS</p>
          </div>
          <div className='smallBox'   onClick={(event)=>{navigate('./videoLecture/js')}}   >
            <p>Start learning</p>
            <p>java script</p>
          </div>
          <div className='smallBox'   onClick={(event)=>{navigate('./videoLecture/React')}}   >
            <p>Start learning</p>
            <p>React</p>
          </div>
          <div className='smallBox'   onClick={(event)=>{navigate('./videoLecture/Nodejs')}}   >
            <p>Start learning</p>
            <p>Node.js</p>
          </div>
          <div className='smallBox'   onClick={(event)=>{navigate('./videoLecture/MongoDB')}}  >
            <p>Start learning</p>
            <p>MongoDB</p>
          </div>
          
        </div>
     </div>

     <div className='mainBoxChild'>
      <p style={{textAlign:"left",fontSize:"30px",fontWeight:"700",color:"red"}}>Video tutorials <sub>-Programming</sub></p>
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",flexWrap:"wrap"}}>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>HTML</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>CSS</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>java script</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>React</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>Node.js</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>MongoDB</p>
          </div>
          
        </div>
     </div>


     <div className='mainBoxChild'>
      <p style={{textAlign:"left",fontSize:"30px",fontWeight:"700",color:"red"}}>Document tutorials <sub>-Web development</sub></p>
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",flexWrap:"wrap"}}>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>HTML</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>CSS</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>java script</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>React</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>Node.js</p>
          </div>
          <div className='smallBox'>
            <p>Start learning</p>
            <p>MongoDB</p>
          </div>
          
        </div>
     </div>
    </div>
  )
}

export default UserPageContent