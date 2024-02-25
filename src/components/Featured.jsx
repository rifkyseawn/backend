import React from 'react'
import styles from '../styles/Featured.module.css'

const Featured = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        <div className={styles.text}>
          <span>Experience More</span>
          <h1>The Cheapest tickets on the internet, period.</h1>
          <span>
            lorem ipsum, or lipsum as it is sometimes known, is dummy text use laying out print, graphic or web designs. The passage is attribute an unknown
          </span>
        </div>

        <div className={styles.image}>
          <video src="/video.mov" autoplay muted loop></video>
        </div>
      </div>

      <div className={styles.search}>

        <div className={styles.search_item}>

          <h3>Location</h3>

          <input type="text" placeholder="search location"/>
        </div>

        <div className={styles.search_item}>

          <h3>Date</h3>

          <input type="date" />
        </div>

        <div className={styles.search_item}>

          <h3>Price</h3>

          <select name="" id="">

            <option value="">All Prices</option>
            <option value="0-500.000">Rp 0  -  Rp 500.000</option>
            <option value="500.000-1.000.0000">Rp 500.000  -  Rp 1.000.000</option>
            <option value="1.000.000+">Rp 1.000.000+</option>
          </select>
        </div>

        <div className={styles.search_item}>

          <h3>Events Type</h3>

          <select name="" id="">
            <option value="Online">Online</option>
            <option value="Physical">Physical</option>
            <option value="Blended">Blended</option>
          </select>
        </div>

        <button classname={styles.events_button}>
          Find Events
        </button>
      </div>
    </div>
    )
};


export default Featured
