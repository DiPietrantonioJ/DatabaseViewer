import { useEffect, useState } from 'react';
import './App.css';
import Welcome from './components/sections/welcome';
import Main from './components/sections/main';
import FirstConfig from './components/sections/configuration';
import Loading from './components/sections/loading';
import Login from './components/sections/login';
import axios from 'axios';

function App() {

  const [mainLoading, isMainLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [firstTime, isFirstTime] = useState(true);
  //const [noLogin, setNoLogin] = useState(true);
  const [screen, setScreen] = useState("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const [brandImg, setBrandImg] = useState("");
  const [brandName, setBrandName] = useState("");
  const [userDisplayName, setUserDisplayName] = useState("");
  const [databases, setDatabases] = useState([]);

  async function postFunction(url: string, data: any) {
    var bodyFormData = new FormData();
    data.forEach((element: any) => {
      bodyFormData.append(element.name, element.value);
    });
    try {
      const response = await axios({
        method: "post",
        url: url,
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      if (response.status === 200) {
        return response;
      }
    } catch (error: any) {
      return error.response;
    }
  }

  function doneLoading() {
    if (firstTime) {
      setScreen('welcome');
    } else {
      setScreen('login');
    }
  }

  useEffect(() => {
    document.title = "DatabaseViewer";
    postFunction("./checkFirstTime.php", [
      { name: "action", value: "checkFirstTime" }
    ]).then((response: any) => {
      if (response.status == 200) {
        if (response.data == 1) {
          isFirstTime(true);
        } else {
          isFirstTime(false);
        }
        setTimeout(() => {
          isMainLoading(false);
        }, 1000);
      } else {
        if (response.status == 404) {
          setErrorMsg("Check your DatabaseViewer installation folder if checkFirstTime.php exists.");
        }
      }
    })
  }, [])

  useEffect(() => {
    if (brandImg != "" && brandImg != undefined) {
      var icon = document.createElement("link");
      icon.rel = "icon";
      icon.type = "image/svg+xml";
      icon.href = brandImg;
      document.head.appendChild(icon);
    }
  }, [brandImg])

  useEffect(() => {
    if (brandName != "") {
      document.title = brandName + " | DatabaseViewer";
    }
  }, [brandName])

  useEffect(() => {
    if (errorMsg != "") {
      alert(errorMsg);
    }
  }, [errorMsg])

  return (
    <>
      <main className="bg-black w-full h-full absolute flex flex-col justify-between items-center text-white open-sans">
        {screen == "loading" && <Loading
          loading={mainLoading}
          doneLoading={doneLoading}
        />}
        {screen == "login" && <Login
          setUserDisplayName={setUserDisplayName}
          setDatabases={setDatabases}
          setBrandName={setBrandName}
          setBrandImg={setBrandImg}
          setErrorMsg={setErrorMsg}
          postFunction={postFunction}
          setCurrentUser={setCurrentUser}
          setScreen={setScreen}
        />}
        {screen == "welcome" && <Welcome
          setScreen={setScreen}
        />}
        {screen == "firstconfig" && <FirstConfig
          setErrorMsg={setErrorMsg}
          postFunction={postFunction}
          setScreen={setScreen}
        />}
        {screen == "mainapp" && <Main
          userDisplayName={userDisplayName}
          databases={databases}
          brandName={brandName}
          brandImg={brandImg}
          currentUser={currentUser}
          postFunction={postFunction}
        />}
      </main>
    </>
  )
}

export default App
