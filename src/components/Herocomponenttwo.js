import React from "react";
import controls from "./Controls";
const Item = controls.styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#3A10E5' : '#3A10E5',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Herocomponenttwo(){
    return(
        <>
        <controls.Box sx={{ flexGrow: 1, backgroundColor: '#3A10E5',marginTop:2 }}>
        <controls.Grid container spacing={2} justifyContent="center">
          <controls.Grid item xs={12}sm={12} md={5}>
            <Item sx={{ marginTop: 5 }}>
            <img src={controls.signup} 
            style={{ height: '60%', width: '70%' }}
             alt="Description" />
            </Item>
        </controls.Grid>
           <controls.Grid item xs={12} sm ={12} md={5}>
            <Item sx={{ marginTop: 10 }}>
              <controls.Typography variant='h2' sx={{  color:'#fff', marginBottom:3 }}>Start for free</controls.Typography>
              <controls.Typography variant= "h3" sx={{  color:'#fff'}}>If you’ve made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.</controls.Typography>
         <controls.Link to='/signup'>  <controls.Button sx={{backgroundColor:"yellow", color:"black", marginTop:2, marginBottom:{md:"20px",sm:"20px",xs:"20px"}}}>Signup</controls.Button></controls.Link> 
            </Item>
          </controls.Grid>
        </controls.Grid>
        </controls.Box>
        </>
    );
}
export default Herocomponenttwo;