import React, { useRef } from 'react';
import './HeaderDesktop.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function HeaderDesktop() {
    

    return (
        <div className="HeaderDesktop" >
            <Grid container alignItems="center" className="HeaderPaddingDesktop" spacing={0}>
                <Grid container item xs={3} spacing={0}>
                    <img src={process.env.PUBLIC_URL + 'images/logo128.png'} className="LogoDesktop" width="55px" height="55px"></img><h3>Revburger</h3>
                </Grid>
                <Grid container item xs={6} spacing={0}>
                    <Paper className="SearchbarHeaderDesktop" component="form"  elevation={2}>
                        <InputBase 
                            className="InputSearchbarHeaderDesktop"
                            placeholder="Buscar"
                        />
                        <IconButton className="ButtonSearchbarHeaderDesktop" aria-label="search" >
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

export default HeaderDesktop;