//  import { useEffect, useState } from "react";
// const useRegister = (userDetails)=>{
//     console.log(userDetails.firstName)
//     let name = userDetails.firstName
//     let message = userDetails.message
// }
    // const [name, setName ] = useState("");
    // const [message, setMessage] = useState("")

    // useEffect(()=>{
    //     if(userDetails){
    //         setName(userDetails.firstName);
    //         setMessage("Registered sucessfully");
          
    //     }
    // }, [userDetails])
    const useRegister = async (userDetails) => {
        return new Promise ((resolve) =>  {
            resolve({
                name:userDetails.firstName,
                message: "Registered successfully",

            });
        });
    };

export default useRegister;