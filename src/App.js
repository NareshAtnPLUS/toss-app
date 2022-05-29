import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";



function App() {
  const [isHead,setIsHead] = useState(null)
  const onTossClick = ()=> {
    const value = Math.random()
    console.log(value)
    if(value>0.5){
      setIsHead('Head')
    } else {
      setIsHead('Tail')
    }

  }
  return (
    <Grid sx={{padding:5}} container justifyContent={"center"}>
      <Grid container justifyContent={"center"} item xs={12}>
        <Typography variant="h3" >Coin Tosser!?</Typography>
      </Grid>
      <Grid  container justifyContent={"center"} item xs={12}>
        <Typography  variant="h4">Result is {isHead}</Typography>
      </Grid>
      <Grid  container justifyContent={"center"} item xs={12}>
        <Button size="large" color="secondary"  variant="contained" onClick={()=>onTossClick()} > Toss a Coin</Button>
      </Grid>
    </Grid>
  );
}

export default App;
