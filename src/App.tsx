import AppCSS from './App.module.css';
import { OverlayContainer } from './components/overlayContainer/OverlayContainer';
import { useState } from 'react';

const App = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  return (
    <>
      <div className={AppCSS.container}>
        <OverlayContainer header={isRegistered ? "Welcome Back!" : "Hello, Friend!"}
          description={isRegistered
            ? "To keep connected with us please login with your personal info"
            : "Enter your personal details and start journey with us"}
          btnText={isRegistered ? "Sign In" : "Sign Up"}
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered} />
      </div></>
  )
}

export default App;