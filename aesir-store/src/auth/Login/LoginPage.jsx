import styles from './Login.module.css';
import { Link } from 'react-router';

const LoginPage = () => {
    return (
        <>
        <form className={styles.loginForm}>
        <div className={styles.labelInput}>
        <label htmlFor="login">UserName</label>
        <input className={styles.input} type="text" placeholder="Enter your username" required/>
        </div>

        <div className={styles.labelInput}>
        <label htmlFor="password">Password</label>
        <input className={styles.input} type="password" placeholder="Enter your password" required />
        </div>
        <div>
        <button className={styles.button}> Login </button>
        </div> 
        </form>

        <span>Don't have an account? <Link className={styles.link} to="/register"> Sign Up </Link>
        </span>
    
        </>
    )
}

export default LoginPage