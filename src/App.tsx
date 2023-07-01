import { useEffect, useState } from 'react';
import './App.css';
import Welcome from './components/sections/welcome';
import Main from './components/sections/main';
import FirstConfig from './components/sections/configuration';
import Loading from './components/sections/loading';
import Login from './components/sections/login';

function App() {

  const [mainLoading, isMainLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [firstTime, isFirstTime] = useState(true);
  const [screen, setScreen] = useState("loading");

  function doneLoading() {
    if (firstTime) {
      setScreen('welcome');
    } else {
      setScreen('login');
    }
  }

  useEffect(() => {
      setTimeout(() => {
        isFirstTime(false);
        isMainLoading(false);
      }, 1500);
  }, [])

  return (
    <>
      <main className="bg-black w-full h-full absolute flex flex-col justify-between items-center text-white open-sans">
        {screen == "loading" && <Loading loading={mainLoading} doneLoading={doneLoading} />}
        {screen == "login" && <Login setCurrentUser={setCurrentUser} setScreen={setScreen}/>}
        {screen == "welcome" && <Welcome setScreen={setScreen} />}
        {screen == "firstconfig" && <FirstConfig setScreen={setScreen} />}
        {screen == "mainapp" && <Main />}
      </main>
    </>
  )
}

export default App
