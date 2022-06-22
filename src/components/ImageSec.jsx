import React, { useEffect, useState } from 'react'
import { ref } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase--config'
function ImageSec({profileUrl}) {
    const [imgurl,setimgurl]=useState("");
    const getimg = async () => {
        if (storage) {

            await getDownloadURL(ref(storage, profileUrl)).then((x) => {
                setimgurl(x)
            })

        }
    }

    useEffect(() => {
        getimg();

    }, [])
    return (
        <>
            <div className='cover'>
                <img src="images/cover.jpg" />
            </div>
            <div className='profile'>
                <img src={imgurl}  />
            </div>
        </>

    )
}

export default ImageSec