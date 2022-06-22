import React from 'react'
import Contact from './Contact'
import Footer from './Footer'
import ImageSec from './ImageSec'
import NameSec from './NameSec'
import Seperation from './Seperation'

function Profile(props) {
  console.log(props.links)
  return (
    <div className='profile--container'>
          <ImageSec
          profileUrl={props.profileUrl}
          />
          <NameSec 
          firstName={props.firstName}
          lastName={props.lastName} 
          bio={props.bio} />
          <Seperation/>
          <Contact
          email={props.email}
          phone={props.phone}
          address={props.address}
          dob={props.dob}
          />
          <Seperation/>
          <Footer
          email={props.email}
          links={props.links}
          />
    </div>
  )
}

export default Profile