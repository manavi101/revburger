import React, { useRef } from 'react';
import './HeaderMobile.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function HeaderMobile() {
    const [ShowSearch,setShowSearch] = React.useState(false);
    const InputSearchBarMobile = useRef(null);
    function TriggerSearchBarMobile(){
        setShowSearch(true);
        setTimeout(
            function() {
                InputSearchBarMobile.current.click();
            }.bind(this),
            25
        ); 
    }
    return (
        <div className="HeaderMobile" >
            <Grid container alignItems="center" spacing={0}>
                <Slide direction="down" in={ShowSearch} timeout={{appear:0,enter:300,exit:0}} mountOnEnter unmountOnExit >
                    <Grid container alignItems="center" style={{padding:6}} spacing={0}>
                        <Grid container item xs={12} spacing={0}>  
                            <Paper className="SearchbarHeaderMobile" component="form"  elevation={2}>
                                <IconButton className="InputButtonIconHeaderMobile" onClick={() => setShowSearch(false)}>
                                    <ArrowBackIcon />
                                </IconButton>
                                <InputBase
                                    ref={InputSearchBarMobile} 
                                    className="InputSearchbarHeaderMobile"
                                    placeholder="Buscar"
                                />
                                <IconButton className="InputButtonIconHeaderMobile">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Grid>
                    </Grid>
                </Slide>
                <Slide direction="down" in={!ShowSearch} unmountOnExit timeout={{appear:100,enter:1,exit:0}}>
                    <Grid container item xs={12} spacing={0}>
                        <Grid container item xs={6} spacing={0}>
                            <img src={process.env.PUBLIC_URL + 'images/logo128.png'} className="LogoMobile" width="48px" height="48px"></img><h5>Revburger</h5>
                        </Grid>
                        <Grid container justify="flex-end" item xs={6} spacing={0}>
                            <Grid container item xs={2} spacing={0}>
                            <IconButton className="InputButtonIconHeaderMobile"  onClick={()=>TriggerSearchBarMobile()}>
                                <SearchIcon/>
                            </IconButton>
                            </Grid>
                            <Grid container item xs={2} spacing={0}>
                            <IconButton className="InputButtonIconHeaderMobile" >
                                <AccountCircleOutlinedIcon />
                            </IconButton>
                            </Grid>  
                        </Grid>
                    </Grid>
                </Slide>
            </Grid>
        </div>
    );
}

export default HeaderMobile;