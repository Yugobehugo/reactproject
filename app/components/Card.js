import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import {useRouter} from 'next/router'

export default function Card(props) {
    const [user, setUser] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        console.log(selected)

    }, [selected]);
    const router = useRouter()

    const gotoproductpage = (name) => {
        router.push(props.title)
    }
   
    return (
        <div className={styles.Cardcontainer}>
        <h2>{props.title}</h2>
        <Image className={styles.Cardimg}
        width='100%'
        height= '100%'
        src={props.Image} alt=""/>
        <p>{props.desc}</p>
        <h2>{props.price} euros</h2>

        <button onClick={() => gotoproductpage(props.title)}>Acheter</button>
    </div>
    )
}
