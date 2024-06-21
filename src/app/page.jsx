"use client"
import styles from "./homepage.module.css"
import { useState } from "react";

const page = () => {
  const [count, setclick] = useState(0);
  
  return (
    <div className={styles.body}>
      <div>
        <h1 className={styles.h1}>WELCOME BRO!</h1>
      </div>
      <div>
        <button className={styles.button} onClick={() => setclick(count+1)}>
          CLICK ME!!!!!!!!
        </button>
<br />
<br />

      </div>
      <div className={styles.symbol}><h1 className={styles.h2}>{count}</h1></div>
    </div> 
  )
}

export default page