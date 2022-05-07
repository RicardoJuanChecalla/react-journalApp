
import Swal from 'sweetalert2'
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { noteLogout } from './notes';
import { finishLoading, startLoading } from './ui';

export const login = (uid, displayName) => (
    {
      type: types.login,
      payload: {
          uid,
          displayName
      }
    }
  );

  export const logout = () => (
    {
      type: types.logout
    }
  );
  
  export const starLoginEmailPassword = (email, password) => {
    return (dispatch) => {
      dispatch( startLoading() );
      firebase.auth().signInWithEmailAndPassword( email, password)
      .then(({user}) => {
        dispatch( login( user.uid, user.displayName ) );
      })
      .catch(e => {
        console.log(e);
        dispatch( finishLoading());
        Swal.fire('Fail',e.message, 'error' );
      });
    }
  }

  export const starGoogleLogin = () => {
    return (dispatch) => {
      firebase.auth().signInWithPopup( googleAuthProvider)
      .then(({user}) => {
        dispatch(
          login(user.uid, user.displayName)
        );
      })
      .catch( e => {
        console.log(e);
        Swal.fire('Fail',e.message, 'error' );
      });
    }
  }
  
  export const startRegisterWithEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
      firebase.auth().createUserWithEmailAndPassword ( email, password)
      .then(async({user}) => {
        await user.updateProfile({displayName: name});
        dispatch(
          login(user.uid, user.displayName)
        );
      })
      .catch(e => {
        console.log(e) 
        Swal.fire('Fail',e.message, 'error');
      });
    }
  }

  export const startLogout = () =>{
    return async ( dispatch ) =>{
      await firebase.auth().signOut();
      dispatch( logout() );
      dispatch( finishLoading() );
      dispatch ( noteLogout() );
    }
  }

 