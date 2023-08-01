
import { Toolbar, AppBar, Typography, Container, Box, Grid, Button} from '@mui/material'
import ReactPlayer from "react-player"

import CameraIcon from "@mui/icons-material/Camera";


const Player = () => {
  return (
   <>
   <AppBar position= 'fixed'>
    <Toolbar>
    <Typography variant='h6' >React Video</Typography>
    </Toolbar>
    </AppBar>
    <Toolbar/>
    <Container>
        <Box  sx={{
          width: '100%', 
          position:'relative',
        }}>
        <ReactPlayer width="100%" height='100%'
         url='https://youtu.be/6GATRApPww8' muted={false} playing={false}/>

<Box sx={{position:'absolute', top: '0',
left:'0', right:'0', bottom:'0', bgcolor:'rgba(0,0,0,0.6)',
 display:'flex', flexDirection:'column',
  justifyContent:'space-between', zIndex:'1' }}>

    {/* top control */}
  <Grid container direction='row' alignItems='center' justifyContent='space-between' sx={{ p:2}} >

    <Grid item> 
    <Typography variant="h5" color='white' >Video Title</Typography>
    <CameraIcon />
    </Grid>
    <Grid item> 
  <Button variant='contained' color='primary'>  <CameraIcon />  Boomark</Button>
    </Grid>
  </Grid>

{/* Middle Controls */}




</Box>
</Box>
    
 </Container>
   </>
  )
}

export default Player
