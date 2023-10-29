import React from 'react'
import ieee from '../assets/Navbar/ieee.png'
import iiit from '../assets/Navbar/iiit.jpg'


function LogoSection() {
  return (
    <div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    className="w-full my-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
>
    <ul x-ref="logos" className="   flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img src={ieee} className='h-32 w-32'    alt="Facebook" />
        </li>
        <li>
            <img src={iiit} className='h-32 w-32' alt="Disney" />
        </li>
        <li>
            <img src={ieee} className='h-32 w-32' alt="Airbnb" />
        </li>
        <li>
            <img src={iiit} className='h-32 w-32' alt="Apple" />
        </li>
        <li>
            <img src={ieee} className='h-32 w-32' alt="Spark" />
        </li>
        <li>
            <img src={iiit} className='h-32 w-32' alt="Samsung" />
        </li>
       
    </ul>
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
    <li>
            <img src={ieee} className='h-32 w-32'    alt="Facebook" />
        </li>
        <li>
            <img src={iiit} className='h-32 w-32' alt="Disney" />
        </li>
        <li>
            <img src={ieee} className='h-32 w-32' alt="Airbnb" />
        </li>
        <li>
            <img src={iiit} className='h-32 w-32' alt="Apple" />
        </li>
        <li>
            <img src={ieee} className='h-32 w-32' alt="Spark" />
        </li>
        <li>
            <img src={iiit} className='h-32 w-32' alt="Samsung" />
        </li>
    </ul>                
</div>
  )
}

export default LogoSection;