import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const [user, setUser] = useState(null);
   
    return (
        <div className={styles.Navcontainer}>
          <h1>NFT Marketplace</h1>
          <p>Menu</p>
          <div>
              { user ? (
                  <button>LOGIN</button>
              ) : (
                  <button>LOGIN</button>
              )}
          </div>
    <div className = {styles.barreNav} ></div>
        </div>
    )
}
