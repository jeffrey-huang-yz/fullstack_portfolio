import React, { useState } from 'react';
import {images} from '../../constants';
import './Navbar.scss';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    
    <nav className = "app__navbar"> {/*BEM naming method*/} 
      <div className = "app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/*Dynamic block of code and array to loop through all nav bar assets*/} 
        {/*Call map for instant return function*/} 
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => ( 
          <li className = "app__flex p-text" key={`link-${item}`}>  {/*Centers link text and makes it paragraph text*/} 
            
            <a href={'#${item}'}> {/*Links for each navbar item*/} 
            {item}</a>
            <div />
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick = {() => setToggle(true)}/>

          {/*If toggle is true*/} 
          {toggle && ( 
              <motion.div
                whileInView={{ x: [300, 0]}}
                transition={{duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick = {() => setToggle(false)}/>
                <ul>
                  {['home', 'about', 'work', 'skills', 'contact'].map((item) => ( 
                    <li key={item}>  
                      <a href={'#${item}'} onClick = {() => setToggle(false)}>
                      {item}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
      </div>
    </nav>
  )
}

export default Navbar;