import React from 'react'
import {motion} from 'framer-motion';
import {images} from '../../constants';
<<<<<<< HEAD
import {AppWrap} from '../../wrapper';
=======

>>>>>>> efd872de8370cde6d6695ff0eb9483851c4cbc02

import './Header.scss';

const scaleVariants = {
  whileInView: {
      scale: [0,1],
      opacity: [0,1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
  }
}
const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView= {{x: [-100, 0], opacity: [0, 1]}}
        transition = {{duration: 1.25}}
        className = 'app__header-info'>
          <div className= 'app__header-badge'>
              <div className='badge-cmp app__flex'>
                <span>
                👋
                </span>
                <div style={{marginLeft:20}}>
                  <p className="p-text">
                    Hello, I'm
                  </p>
                  <h1 className='head-text'>
<<<<<<< HEAD
                    Jeffrey Huang
=======
                    Jeffrey
>>>>>>> efd872de8370cde6d6695ff0eb9483851c4cbc02
                  </h1>
                </div>
              </div>

              <div className='tag-cmp app__flex'>
                <p className="p-text">
                    A Computer Engineering Student at the University of Waterloo
                </p>

                <p className="p-text2">
                    Aspiring full-stack developer
                </p>
              </div>
          </div>
      </motion.div>
      <motion.div 
        whileInView= {{opacity: [0, 1]}}
        transition = {{duration: 1.25, delayChildren: 0.5}}
        className = 'app__header-img'>
        <img src={images.profile} alt='profile_bg' />
        <motion.img whileInView= {{scale: [0, 1]}}
        transition = {{duration: 1, ease: 'easeInOut'}}
        src={images.circle}
        alt="profile_circle"
        className = "overlay_circle" />

      </motion.div>
     
      <motion.div
        variant={scaleVariants}
        whileInView = {scaleVariants.whileInView}
<<<<<<< HEAD
        className = "app__header-circles"
        >

          {[images.cpp, images.css, images.html].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
              
=======
        className = "app__header-circles">

          {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
>>>>>>> efd872de8370cde6d6695ff0eb9483851c4cbc02
            </div>
          ))}
      </motion.div>

    </div>
  )
}

<<<<<<< HEAD
export default AppWrap(Header, 'home');
=======
export default Header
>>>>>>> efd872de8370cde6d6695ff0eb9483851c4cbc02
