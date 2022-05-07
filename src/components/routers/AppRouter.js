
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../../actions/notes';

export const AppRouter = () => {
  
  const dispatch = useDispatch();

  const [checking, setChecking ] = useState(true);
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  
  useEffect(() => {

    firebase.auth().onAuthStateChanged( async(user)=>{
      if( user?.uid){
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch( startLoadingNotes(user.uid) );
      }
      else{
        setIsLoggedIn(false);
      }
      setChecking(false);
    });

  }, [dispatch, setChecking, setIsLoggedIn]);

  if(checking){
    return(
      <h1>Wait...</h1>
    )
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/auth/*' element ={
            <PublicRoute>
              <AuthRouter /> 
            </PublicRoute> 
            } 
          />
          <Route path='/' element ={
            <PrivateRoute>
              <JournalScreen /> 
            </PrivateRoute> 
            } 
          />
          <Route path='/*' element={ <Navigate to="/auth/register" /> } />
        </Routes>
    </BrowserRouter>
  )
}
