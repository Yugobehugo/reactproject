import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/Card.module.css'

export default function Card(props) {
    const [user, setUser] = useState(null);
   
    return (
        <div className={styles.Cardcontainer}>
        <h2>{props.title}</h2>
        <Image className={styles.Cardimg}
        width='100%'
        height= '100%'
        src={props.Image} alt=""/>
        <p>{props.desc}</p>
        <h2>{props.price} euros</h2>

        <button>Acheter</button>
    </div>
    )
}
