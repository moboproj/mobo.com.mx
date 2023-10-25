import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
    'AnchorGeneral',
]

const AnchorGeneral= () => {
    const handles = useCssHandles(CSS_HANDLES);

    const [url,setUrl]=useState(window?.location || {});

    useEffect(() => {
        if(window.location)
            setUrl(window.location);
    },[])

    if(!!url.hash){
        setTimeout(function(){
            const hash=window.location.hash.substring(1);

            const destination = document.getElementById(hash);
            destination.scrollIntoView({
                behavior: 'smooth'
            });
        },1000)   
    }

    return <></>
}

export default AnchorGeneral