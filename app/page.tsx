import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
<h1 style={{color:"blue",background:"black",height:"80px",paddingTop:"20px"}}><center>SIR HAMZA ALVI <br /></center></h1>
<br />
<nav>
       
      <ul style={{color:"blue"}}>
        <li>
          <Link href="/home"  target='_blank'>Home</Link>
        </li>
        <li>
          <Link href="/about" target='_blank'>About</Link>
        </li>
        <li>
          <Link href="/contact"  target='_blank'>Contact</Link>
        </li>
        <li>
          <Link href="/services"  target='_blank'>Services</Link>
        </li>
      </ul>
    </nav>
    </div>

  )
};


export default Navbar;
