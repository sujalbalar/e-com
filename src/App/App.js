import react, {useState} from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Router, Route, Link } from 'react-router-dom';
import './App.css';
import logo from '../public/images/logo.jpeg';

function Footer(){
  return(
    <>
      <Box style={{background : "#f0f0f0", padding : ".5em", display : "flex", justifyContent : "center"}}>
        <Typography>
          abcscammers2k22@gmail.com
        </Typography>
      </Box>
    </>
  )
}

function Logo(){
  return(
    <div style={{display : 'flex', alignItems : 'center', gap : '.25em'}}>
      <IconButton>
        <img style={{width : '1.5em', height : '1.5em', borderRadius : '50%'}} src={logo} />
      </IconButton>
      <Typography color='#000000' variant='h5' content='h4' >
        Beluga
      </Typography>
    </div>
  );
}

function Search(){
  return(
    <div style={{width : '50%', backgroundColor : '#fafafa', padding : '.5em', borderRadius : '.5em', display : 'flex', gap : '.5em', alignItems : 'center'}}>
      <SearchIcon style={{color : '#999'}} />
      <InputBase style={{width : '100%'}} placeholder='Search...' />
    </div>
  );
}

function UserPanel(){
  return(
    <div style={{display : 'flex', alignItems : 'center', justifyContent : 'space-around'}}>
        <IconButton size='large'>
          <Badge badgeContent={4} color='error'>
            <NotificationsIcon style={{color : '#999'}} />
          </Badge>
        </IconButton>
        <IconButton size='large'>
          <AccountCircle style={{color : '#999'}} />
        </IconButton>
    </div>
  );
}

function UserAcc(){
  return(
    <div style={{display : 'flex', alignItems : 'center', justifyContent : 'space-around'}}>
      <Button style={{color:'#000000'}} onClick={() => alert("LogIn")} >
        SignIn
      </Button>
      <Button style={{color:'#000000'}} onClick={() => alert("LogOn")} >
        SignUp
      </Button>
    </div>
  );
}

function Trending(){
  return(
    <div style={{}}>

    </div>
  );
}

function Container(){
  return(
    <Grid>
      <Trending />
    </div>
  );
}

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(true);

  return (
    <>
      <AppBar style={{background : '#f0f0f0', padding : '.5em'}} position='sticky'>
        <Toolbar>
          <Box style={{width : '100%', display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
            <Logo />
            <Search />
            {isLoggedIn == true ? <UserPanel /> : <UserAcc />}
          </Box>
        </Toolbar>
      </AppBar>
      <Container/>
      <Footer>
        <h3>xyz@gmail.com</h3>
      </Footer>
    </>
  );
}

export default App;
