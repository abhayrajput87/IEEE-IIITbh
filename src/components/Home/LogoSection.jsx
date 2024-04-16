import React from "react";
import ieee from "../../assets/Navbar/ieee.jpg";
import iiit from "../../assets/Navbar/iiit.jpg";
import ieeeKol from "../../assets/Navbar/ieee_kolkata.png";
import ieeeBbsr from "../../assets/Navbar/ieee_bbsr.jpeg";
import aspcc from "../../assets/Navbar/aspcc.jpg";

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
      <ul
        x-ref="logos"
        className="   flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <img src={ieee} className="h-32 w-32" alt="Facebook" />
        </li>
        <li>
          <img src={iiit} className="h-32 w-32" alt="Disney" />
        </li>
        <li>
          <img src={ieeeKol} className="h-32 w-32" alt="Airbnb" />
        </li>
        <li>
          <img src={ieeeBbsr} className="h-32 w-32" alt="Apple" />
        </li>
        <li>
          <img src={aspcc} className="h-32 w-32" alt="Spark" />
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <img src={ieee} className="h-32 w-32" alt="Facebook" />
        </li>
        <li>
          <img src={iiit} className="h-32 w-32" alt="Disney" />
        </li>
        <li>
          <img src={ieeeKol} className="h-32 w-32" alt="Airbnb" />
        </li>
        <li>
          <img src={ieeeBbsr} className="h-32 w-32" alt="Apple" />
        </li>
        <li>
          <img src={aspcc} className="h-32 w-32" alt="Spark" />
        </li>
      </ul>
    </div>
  );
}

export default LogoSection;
