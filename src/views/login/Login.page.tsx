import { Container, Grid } from "@mui/material"
import { useState } from "react"


export const Login:React.FC=()=>{
    let [name,setName]=useState('')
    let [password,setPassword]=useState('')
     return <>
 <Container fixed>
 <Grid
   container
   direction="column"
   justifyContent="center"
   alignItems="center"
 >
 <h1>login form</h1>
     <div>
     <label htmlFor="">name</label><br />
     <input type="text" name="" id="" onChange={(e)=>{setName(e.target.value)}} />
     </div>
     <div>
     <label htmlFor="">password</label><br />
     <input type="password" name="" id="" onChange={(e)=>{setPassword(e.target.value)}} />
     </div>
     <br/>
     <button onClick={()=>{alert(name+""+password)}}>submit</button>
 </Grid>
     
     
 </Container>
 
     </>
 }