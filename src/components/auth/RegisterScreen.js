import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  
  const [formValues, handleInputChange] = useForm({
    name: 'juan',
    email: 'juan@gmail.com',
    password: '654321',
    password2: '654321',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister =(event)=>{
    event.preventDefault();
    if (isFormValid()){
      dispatch(startRegisterWithEmailAndPassword(email,password,name));
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0){
      dispatch(setError('Name is required'));
      return false;
    }else if ( !validator.isEmail(email) ){
      dispatch(setError('Email is not valid'));
      return false;
    }else if ( password !== password2 || password.trim().length < 5 ){
      dispatch(setError('Password should be at least 6 characters'));
      return false;
    }
    dispatch(removeError());
    return true;
  }
  
  return (
    <>
        <h3 className="auth__title">Register</h3>    
        <form 
          onSubmit={handleRegister}
          className = "animate__animated animate__fadeIn animate__faster"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="auth__input"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            value={password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            className="auth__input"
            value={password2}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="btn btn-primary btn-block mb-5"
          >Register
          </button>

          <Link to="/auth/login" className="link">
            Alredy registered?
          </Link>
        </form>
    </>
  )
}