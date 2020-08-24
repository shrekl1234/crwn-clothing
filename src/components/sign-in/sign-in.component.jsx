import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
const SignIn = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    
 const handleSubmit = (event) => {
   event.preventDefault();
 };
    const handleChange = (event) => {
        const {value, name} = event.target;
        console.log(name, value);
        if(name === "email"){
            setEmail(value);
        }
         if (name === "password") {
           setPassword(value);
         }

 };



    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and passowrd</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="email"
            name="email"
            value={email}
            type="email"
            handleChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            id="password"
            name="password"
            value={password}
            type="password"
            required
            handleChange={handleChange}
            label="Password"
          />
          <CustomButton type="submit"> Sign In </CustomButton>
        </form>
      </div>
    );
};

export default SignIn;
