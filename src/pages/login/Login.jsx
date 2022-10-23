import React from 'react';
import { useState } from 'react';
import styles from "./Login.module.css";
import {useNavigate} from "react-router-dom"
 
const Login = () => {
    const [creadintial, setCredentials] = useState({
        username: undefined,
        password: undefined
    })
   


    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };

      const navigate = useNavigate()

    const hangleClick = async (e) => {
        e.preventDefault();
    }

  return (
    <div className={styles.login}>
      <div className={styles.lContainer}>
        <input
          type="text"
          placeholder="Email or username"
          id="username"
          onChange={handleChange}
          className={styles.lInput}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className={styles.lInput}
        />
        <button onClick={hangleClick} className={styles.lButton}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login;