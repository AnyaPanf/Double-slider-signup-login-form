import AppCSS from './App.module.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';
import FacebookImg from './assets/facebook.svg';
import LinkedInImg from './assets/linkedin.svg';
import GoogleImg from './assets/google.svg';

interface IFormInput {
  name?: string
  email: string
  password: string
}

const App = () => {
  const [rightPanelActive, setRightPanelActive] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSignUp: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  const onSignIn: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  const handleSwitch = () => {
    setRightPanelActive(!rightPanelActive)
  }

  return (
    <>
      <div className={rightPanelActive ? `${AppCSS.container} ${AppCSS.rightPanelActive}` : `${AppCSS.container}`}>
        <div className={`${AppCSS.formContainer} ${AppCSS.signUpContainer}`}>
          <form className={AppCSS.form} onSubmit={handleSubmit(onSignIn)}>
            <h1 className={AppCSS.title}>Sign in</h1>
            <div className={AppCSS.socialContainer}>
              <a href="#"><img src={FacebookImg} alt="Facebook" /></a>
              <a href="#"><img src={LinkedInImg} alt="LinkedIn" /></a>
              <a href="#"><img src={GoogleImg} alt="Google+" /></a>
            </div>
            <span>or use your account</span>
            <input {...register("email")}
              className={AppCSS.formInput}
              type="email"
              placeholder="Email"
              required />
            <input {...register("password")}
              className={AppCSS.formInput}
              type="password"
              placeholder="Password"
              required />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className={`${AppCSS.formContainer} ${AppCSS.signInContainer}`}>
          <form className={AppCSS.form} onSubmit={handleSubmit(onSignUp)}>
            <h1 className={AppCSS.title}>Create Account</h1>
            <div className={AppCSS.socialContainer}>
              <a href="#"><img src={FacebookImg} alt="Facebook" /></a>
              <a href="#"><img src={LinkedInImg} alt="LinkedIn" /></a>
              <a href="#"><img src={GoogleImg} alt="Google+" /></a>
            </div>
            <span>or use your email for registration</span>
            <input {...register("name")}
              className={AppCSS.formInput}
              type="text"
              placeholder="Name"
              required />
            <input {...register("email")}
              className={AppCSS.formInput}
              type="email"
              placeholder="Email"
              required />
            <input {...register("password")}
              className={AppCSS.formInput}
              type="password"
              placeholder="Password"
              required />
            <button>Sign Up</button>
          </form>
        </div>
        <div className={AppCSS.overlayContainer}>
          <div className={AppCSS.overlay}>
            <div className={`${AppCSS.overlayPanel} ${AppCSS.overlayLeft}`}>
              <h1>Welcome Back!</h1>
              <p className={AppCSS.text}>To keep connected with us please login with your personal info</p>
              <button className={AppCSS.ghost}
                id="signIn"
                onClick={handleSwitch}>Sign In</button>
            </div>
            <div className={`${AppCSS.overlayPanel} ${AppCSS.overlayRight}`}>
              <h1>Hello, Friend!</h1>
              <p className={AppCSS.text}>Enter your personal details and start journey with us</p>
              <button className={AppCSS.ghost}
                id="signUp"
                onClick={handleSwitch}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;