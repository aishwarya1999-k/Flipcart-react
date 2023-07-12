
import { Container, Grid } from "@mui/material"
import { useState } from "react"

export const Register:React.FC=()=>{
    let [fName,setfName]=useState('');
    let [lName, setlName] = useState('');
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [confirmpassword,setConfirmPassword] = useState('');

    const handleSubmit = () => {
        alert(fName +"  "+ lName+" "+email+" "+password+" "+confirmpassword); 
      };
    return <>
    <Container fixed>
        
    <Grid
       container
        direction="column"
        justifyContent="center"
     alignItems="center"
    >

    <h1>Registration Form</h1>
    <div>
        <label htmlFor="">First Name</label><br/>
        <input type="text" name="" onChange={(e)=>{setfName(e.target.value)}}/>
    </div>
    <div>
        <label htmlFor="">Last Name</label><br/>
        <input type="text" name="" onChange={(e)=>{setlName(e.target.value)}} />
    </div>
    <div>
        <label htmlFor="">Email</label><br/>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div>
        <label htmlFor="">Password</label><br/>
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <div>
        <label htmlFor="">Confirm Password</label><br/>
        <input type="text" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
    </div>
    <br/>
    <button onClick={handleSubmit}>Submit</button>
    </Grid>
</Container>
    </>
}