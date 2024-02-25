import React from 'react'
import styles from '../styles/Register.module.css';

const Register = () => {

    const handleClose=() => {
        window.location.reload();
    }

  return (
    <div className={styles.register}>

        <div className={styles.register_item}>

            <div className={styles.register_input}>

                <div className={styles.back_home}>

                    <button onClick={handleClose}>Back Home</button>

                </div>

                <span>Fill in the Form to get notified of evvents</span>

                <label htmlFor="">Name</label>
                <input type="text"placeholder="Zark Zeus"/>

                <label htmlFor="">Email</label>
                <input type="email" placeholder="zarkzeus@gmail.com"/>
                
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="+628123456789" />

                <button>Get notified</button>
            </div>

            <div className={styles.image}>

                <div className={styles.image_title}>

                    <span>party like there is no tommorow</span>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Register
