import Logo from "@/assets/logo.png";
import HelloWorld from '@/components/HelloWorld/HelloWorld'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import styles from "./App.module.css"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import CircularProgress from '@mui/material/CircularProgress';
import { borderRadius } from "@mui/system";
import React from "react";


const Item = styled(Paper)(({ theme, color, width, height }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
  color: 'white',
  backgroundColor: color,
  borderRadius: '45px',
  height: height ?? '50px',
  width: width ?? '50px',
  margin: '0 auto'
}));


export default function App() {

  const [value, setValue] = React.useState(0);

  return (
    <main className={styles.main}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}> Tous les comptes </Typography>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ ml: 2 }}>
              <EditIcon />
            </IconButton>
          </Toolbar>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}> 29 Décembre 2022 </Typography>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ ml: 2 }}>
              <ChevronRightIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{p: 1, mt: 2}}>

        <Grid container spacing={2}>
          <Grid xs={3} direction="row" style={{textAlign: 'center'}}>
            <small>Alimentation</small>
            <Item color="#3283a8" style={{color: 'white'}}>
              <FastfoodIcon />
            </Item>
            <small>10000 CFA</small>
          </Grid>
          <Grid xs={3}>
            <small>Restaurant</small>
            <Item color="#3240a8" style={{color: 'white'}} >
              <FastfoodIcon  />
            </Item>
            <small>10000 CFA</small>
          </Grid>
          <Grid xs={3}>
            <small>Loisirs</small>
            <Item color="#a83256">
              <FastfoodIcon style={{color: 'white'}} />
            </Item>
            <small>10000 CFA</small>
          </Grid>
          <Grid xs={3}>
            <small>Transports</small>
            <Item color="#f08d4f" style={{color: 'white'}} >
              <FastfoodIcon />
            </Item>
            <small>10000 CFA</small>
          </Grid>
        </Grid>

        <Grid container spacing={2}>

          <Grid xs={3}>
            <Box sx={{ my:2 }}>
              <small>Santé</small>
              <Item color="#50cc5c">
                <FastfoodIcon />
              </Item>
              <small>10000 CFA</small>
            </Box>
            <Box sx={{ my: 2 }}>
              <small>Famille</small>
              <Item color="#9850cc">
                <FastfoodIcon />
              </Item>
              <small>10000 CFA</small>
            </Box>
          </Grid>

          {/* <Grid xs={6} container direction="row" justifyContent="center" alignItems="center"> */}
          <Grid xs={6} container direction="row" justifyContent="left" alignItems="center">
              <CircularProgress color="inherit"
               variant="determinate" value={95} style={{width:'130px', marginLeft: '-15px' }} />
    
          </Grid>

          <Grid xs={3}>
            <Box sx={{ my:2 }}>
              <small>Cadeaux</small>
              <Item color="#c7263b">
                <FastfoodIcon />
              </Item>
              <small>10000 CFA</small>
            </Box>
            <Box sx={{ my:2 }}>
              <small>Achats</small>
              <Item color="#855140">
                <FastfoodIcon />
              </Item>
              <small>10000 CFA</small>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={3} direction="row">
            <small>Ajouter</small>
            <Item color="#e6e6f0" style={{color: 'black'}}>
              <h1>+</h1>
            </Item>
          </Grid>
          <Grid xs={3}>
            {/* <small>Restaurant</small>
            <Item color="#3240a8" style={{color: 'white'}} >
              <FastfoodIcon  />
            </Item>
            <small>10000 CFA</small> */}
          </Grid>
          <Grid xs={3}>
            {/* <small>Loisirs</small>
            <Item color="#a83256">
              <FastfoodIcon style={{color: 'white'}} />
            </Item>
            <small>10000 CFA</small> */}
          </Grid>
          <Grid xs={3}>
            {/* <small>Transports</small>
            <Item color="#f08d4f" style={{color: 'white'}} >
              <FastfoodIcon />
            </Item>
            <small>10000 CFA</small> */}
          </Grid>
        </Grid>

      </Box>
    
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
      {/* <img className={styles.logo} alt="React logo" width="400px" src={Logo} /> */}
      {/* <HelloWorld msg="Hello React + TypeScript + Vite" /> */}
    </main>
  );
}
