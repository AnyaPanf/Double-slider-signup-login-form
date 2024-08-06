import AppCSS from './App.module.css';
import { useState } from 'react';

const App = () => {
  const [rightPanelActive, setRightPanelActive] = useState<boolean>(false);

  const handleSwitch = () => {
    setRightPanelActive(!rightPanelActive)
  }

  return (
    <>
      <div className={rightPanelActive ? `${AppCSS.container} ${AppCSS.rightPanelActive}` : `${AppCSS.container}`}>
        <div className={`${AppCSS.formContainer} ${AppCSS.signUpContainer}`}>
          <form className={AppCSS.form} action="#">
            <h1 className={AppCSS.title}>Sign in</h1>
            <div className="social-container">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-google-plus-g"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input className={AppCSS.formInput} type="email" placeholder="Email" />
            <input className={AppCSS.formInput} type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className={`${AppCSS.formContainer} ${AppCSS.signInContainer}`}>
          <form action="#" className={AppCSS.form}>
            <h1 className={AppCSS.title}>Create Account</h1>
            <div className="social-container">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-google-plus-g"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input className={AppCSS.formInput} type="text" placeholder="Name" />
            <input className={AppCSS.formInput} type="email" placeholder="Email" />
            <input className={AppCSS.formInput} type="password" placeholder="Password" />
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