import React from "react";
import controls from "./Controls";
const Item = controls.styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff0e5' : '#fff0e5',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Herocomponent() {
  return (
    <>
      <controls.Box sx={{ flexGrow: 1, backgroundColor: '#fff0e5' }}>
        <controls.Grid container spacing={2} justifyContent="center">
          <controls.Grid item xs={8}>
            <Item sx={{ marginTop: 15 }}>
              <controls.Typography variant="h1">Skillsoft’s Codecademy</controls.Typography>
              <controls.Typography variant="h2">Build a tech-forward team with training that sticks</controls.Typography>
              <controls.Typography sx={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.3' }}>Level up and level set your team’s technical skills with the most interactive training for programming and data skills.</controls.Typography>
            </Item>
          </controls.Grid>
        </controls.Grid>
        <controls.Grid container spacing={1} justifyContent="center">
          <controls.Grid item xs={8}>
            <Item sx={{ marginTop: 2, marginBottom: 2 }}>
              <img src={controls.icons}
                style={{ height: '30%', width: '80%' }}
                alt="Description" /></Item>
          </controls.Grid>
        </controls.Grid>
        <controls.Grid container spacing={2} justifyContent="center">
          <controls.Grid item xs={8}>
            </controls.Grid>
        </controls.Grid>
      </controls.Box>
</>
 );
}
export default Herocomponent;
