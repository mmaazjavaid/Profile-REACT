import React from 'react'

import {AiOutlinePhone} from'react-icons/ai' 
function Footer({email,links}) {
  return (
    <div className='footer'>
        <div className='email--area'>{email}</div>
        <div className='icons--area'>
           
           {links!==undefined && links.map((link,index) => {
              return(
              <div key={index} className='icon--social'>
                 <AiOutlinePhone />
              </div>
              )
           })}

            
        </div>
        <div className='website--area'>WWW.RICHARDREALESTATE.COM</div>
    </div>
    
  )
}

export default Footer