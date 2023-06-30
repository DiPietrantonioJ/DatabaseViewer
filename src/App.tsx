import { useState } from 'react';
import './App.css';
import Welcome from './components/sections/welcome';
import Main from './components/sections/main';
import FirstConfig from './components/sections/configuration';

function App() {

  const [screen, setScreen] = useState("welcome")

  return (
    <>
      <main className="bg-black w-full h-full absolute flex flex-col justify-between items-center text-white open-sans">
        {screen == "welcome" && <Welcome setScreen={setScreen}/>}
        {screen == "firstconfig" && <FirstConfig setScreen={setScreen}/>}
        {screen == "mainapp" && <Main/>}
      </main>
    </>
  )
}

export default App
