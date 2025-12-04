import { useEffect, useState } from "react"
import styles from "./Register.module.css"
import useRegister from "../../customHooks/useRegister";

const Register = ()=>{

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const[error, setError] = useState("");
    const[password, setPassword] = useState("");

    useEffect (()=> {
        if(message) alert(message);
    }, [message])

  const handleSubmit= async (e)=> {
        e.preventDefault() //dont reload my page
    const userDetails ={ firstName:firstName,lastName:lastName,email:email,}
    

    try{

        const {name, message} = await useRegister(userDetails)
        localStorage.setItem("name", name)
        setMessage(message)
        }catch (error){
            setError("Registration unsuccessful.please try again")
        }

        
}

    return(
        <form onSubmit={handleSubmit} className={styles.RegisterForm}>
                <h1 className={styles.welcome}>Welcome To Aseeyer...</h1>
                      <p className={styles.instruction}>
        Please fill in the form to create an account.
      </p>

        <div className={styles.labelInput}>
            <label htmlFor="firstName"> firstName</label>
            <input 
            id= "firstName" onChange={(e)=> setFirstName(e.target.value)}
            className={styles.input} type = "text" placeholder=""/>
        </div>
         <div className={styles.labelInput}>
            <label htmlFor="LastName"> LastName</label>
            <input   id= "lastName" onChange={(e)=> setLastName(e.target.value)} 
            className={styles.input} type = "text" placeholder=""/>
        </div>
         <div className={styles.labelInput}>
            <label htmlFor="email">Email</label>
            <input  id= "email" onChange={(e)=> setEmail(e.target.value)}  
            className={styles.input} type = "text" placeholder=""/>
        </div>
         <div className={styles.labelInput}>
            <label htmlFor="password">Password</label>
            <input  className={styles.input} type = "text" placeholder=""/>
        </div>
         <div className={styles.labelInput}>
            <label htmlFor="ConfirmPassword"> Confirm Password</label>
            <input  className={styles.input} type = "text" placeholder=""/>
        </div>
        
        <button type="submit">submit</button>
        {/* {message ? alert {message}: ""} */}

        
        </form>
    )
}


      //   <span>
      //   already registered?
      //   <Link className={styles.link} to="/">
      //     Back to Login
      //   </Link>
      // </span>
export default Register