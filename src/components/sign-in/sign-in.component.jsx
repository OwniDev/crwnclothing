import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email : '',
      password : ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    //Prevent the default behavior of the submit button
    const {email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email:'', password:''});
      document.querySelectorAll('input').forEach(cur=>{
        cur.removeAttribute('required');
      });
    } catch (error){
      console.log(error);
    }
    this.setState({email:'', password:''})
    //Set the input back to empty.
  }

  handleChange = event =>{
    const {value, name} = event.target;
    this.setState({ [name] : value })
    //Dynamically set the state depending on the target (target is an object and we are getting its proprieties)
  }



  render(){
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit = {this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            label='email'
            required
            handleChange = {this.handleChange}
          />
          <FormInput 
            name="password"
            type="password"
            value={this.state.password}
            label='password'
            required
            handleChange = {this.handleChange}
          />
          <div className='button'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
          </div>
        </form>
      </div>

    )
  }
}

export default SignIn;