import React, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css'
import Card from './Card'

export default function Marketplace() {
    const [user, setUser] = useState(null);
   
    return (
        <div className={styles.Marketcontainer}>
          <h2>Marketplace</h2>
          <Card title = "test" desc = "salut les loulous" price = "50" Image = "https://www.auto-moto.com/wp-content/uploads/sites/9/2021/02/01-peugeot-208-750x410.jpeg" />
          <Card title = "test2" desc = "salut les loulous" price = "50" Image = "https://www.auto-moto.com/wp-content/uploads/sites/9/2021/02/01-peugeot-208-750x410.jpeg" />
          <Card title = "test3" desc = "salut les loulous" price = "50" Image = "https://www.auto-moto.com/wp-content/uploads/sites/9/2021/02/01-peugeot-208-750x410.jpeg" />
          <Card title = "test4" desc = "salut les loulous" price = "50" Image = "https://www.auto-moto.com/wp-content/uploads/sites/9/2021/02/01-peugeot-208-750x410.jpeg" />
      
    
        </div>
    )
}
