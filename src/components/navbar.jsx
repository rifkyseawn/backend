import React from 'react';
import styles from '../styles/navbar.module.css';
import {useState} from 'react'
import Register from './Register'

const navbar = () => {


  const [register,setRegister] = useState(false);

  const handleOpen = () => {
    setRegister(true)
  }
  return (
    <>


<div>
      

      <div className={styles.container}>


        <div className={styles.logo}>
            
            <span className={styles.logo_text}>RS</span>

        </div>

        <div className={styles.menulink}>
            
            <span> Home</span>
            <span>About us</span>
            <span>MCs</span>
            <span>Event organizers</span>

        </div>

        <div className={styles.notified}>

            <button onClick={(handleOpen)}>Get notified with events</button>
        </div>


      </div>

        
    </div>

    {register && <Register/>}
    </>
  )
}

export default navbar
