import React from 'react'

function NameSec({firstName,lastName,bio}) {
  return (
    <div className='Names'>
        <div className='firstname'>{firstName}</div>
        <div className='name--sec--2'>
            <div className='lastname'>{lastName}</div>
            <div className='job'>{bio}</div>
        </div>
    </div>
  )
}

export default NameSec