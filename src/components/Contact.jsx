import React from 'react'
import {AiOutlinePhone} from'react-icons/ai'
import {BsPhone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
function Contact({phone,email,address,dob}) {
  return (
    <div className='contact--links'>
        <div className='contact--link'>
            <div className='icon'><BsPhone/></div>
            <div className='data'>{phone}</div>
        </div>
        <div className='contact--link'>
            <div className='icon'><AiOutlinePhone/></div>
            <div className='data'>{phone}</div>
        </div>
        <div className='contact--link'>
            <div className='icon'><AiOutlineMail/></div>
            <div className='data'>{email}</div>
        </div>
        <div className='contact--link'>
            <div className='icon'><FiMapPin/></div>
            <div className='data'>{address}</div>
        </div>
    </div>
  )
}

export default Contact