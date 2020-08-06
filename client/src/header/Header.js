import React, { useState } from 'react';
import logo from './logo128.png';
import './Header.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Header() {  
  return (
    <div className="Header" >
      <Grid container alignItems="center" className="Headerpadding" spacing={0} boxShadow={3}>
        <Grid container item xs={3} spacing={0}>
          <img src={logo} class="logo" width="55px" height="55px"></img><h3>Revburger</h3>
        </Grid>
        <Grid container item xs={6} spacing={0}>
          <Paper className="SearchbarHeader" component="form"  elevation={2}>
            <InputBase 
              className="InputSearchbarHeader"
              placeholder="Buscar"
            />
            <IconButton className="ButtonSearchbarHeader" type="submit"  aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid container justify="flex-end" item xs={3} spacing={0}>
          <div style={{paddingRight:"5px"}}>
            <Button variant="outlined" startIcon={<AccountCircleOutlinedIcon />}>Iniciar Sesion</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;