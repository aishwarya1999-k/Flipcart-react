import { Container, Grid } from "@mui/material"
import { Myslider } from "../../components/slider/Myslider.com"
import { MyCard } from "../../components/cards/Mycard.com"
import { CardContainer } from "../../components/cards/CardContainer"

export const Home:React.FC=()=>{
    return  <>
    <Container >
   
<Grid
 
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
<Myslider/>

</Grid>

<CardContainer/>
    </Container></> 
}





