import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { logout } from "../../features/userSlice/user";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Transition = React.forwardRef ( function Transition( props , ref ) {
    return <Slide direction="up" ref={ ref } { ... props } />;
} );

export default function LogoutDialogue() {
    const [ open , setOpen ] = React.useState ( true );
    let navigate = useNavigate ();
    const {  error , loggedOut } = useSelector (
        ( state ) => state.user
    );
    useEffect ( () => {
        // redirect user to login page if registration was successful
        if ( loggedOut ) {
            navigate ( '/' );
        }
        if ( error ) {
            toast ( error );
        }

    } , [ loggedOut , error ] )
    const dispatch = useDispatch ()
    const handleClose = () => {
        setOpen ( false );
    }
    const Logout = () => {
        dispatch ( logout () );
        setOpen ( false );
    }
    const RedirectTo = () => {
        setOpen ( false );
        navigate ( "/" );
    }

    return (

        <Dialog
            open={ open }
            TransitionComponent={ Transition }
            keepMounted
            onClose={ handleClose }
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{ "LogoutDialogue from Desi Village" }</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to logout?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={ RedirectTo }>
                    No
                </Button>
                <Button onClick={ Logout } sx={ {
                    backgroundColor : '#1AC073' ,
                    color : "black" ,
                    cursor : 'pointer'
                } }>Yes</Button>
            </DialogActions>
        </Dialog>

    );
}
